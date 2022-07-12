'use strict';
const fs = require('fs');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const grpc = require('@grpc/grpc-js');

class loadProto {
  constructor(app) {
    this.app = app;
    this.config = app.config;
    this.logger = app.coreLogger;
  }

  /**
     * 获取proto文件路径列表
     * @param protoDir
     */
  async getProtoFileList(protoDir) {

    const fileStat = fs.statSync(protoDir);
    if (!fileStat.isDirectory()) {
      this.logger.error(`[egg-grpc-client] isn't dir: ${protoDir} `);
      return;
    }
    const filePathNameList = fs.readdirSync(protoDir);
    // 过滤
    return filePathNameList
      .filter(name => name.endsWith('.proto'))
      .map(filePathName => path.join(protoDir, filePathName));
  }

  /**
     * 获取grpc client实例
     * @param protoDir
     * @param config
     */
  async getGrpcClient(protoDir, config) {
    const { host, port, loaderOptions } = config;
    const protoList = await this.getProtoFileList(protoDir);
    const grpcClient = {};
    for (const protoTargetPath of protoList) {
      const packageDefinition = protoLoader.loadSync(protoTargetPath, loaderOptions);
      const grpcObject = grpc.loadPackageDefinition(packageDefinition);

      // grpc对象遍历处理
      Object.values(grpcObject).forEach(packageObj => {
        for (const serviceClass of Object.values(packageObj)) {
          if (serviceClass.service != null) {
            const grpcClientInstance = new serviceClass(`${host}:${port}`, grpc.credentials.createInsecure());
            // console.log(Object.getOwnPropertyNames(serviceClass.prototype));
            // 遍历方法 serviceClass.prototype 替换 grpcClientInstance.__proto__
            Object.getOwnPropertyNames(serviceClass.prototype).forEach(name => {
              if (name !== 'constructor') {
                grpcClient[name] = async requestData => await this.handleGrpcClientMethod(grpcClientInstance, name, requestData);
              }
            });
          }
        }
      });
    }
    return grpcClient;
  }

  /**
     * 对grpcClient客户端方法，进行封装处理
     * 支持async/await调用
     * @param clientInStance  grpc客户端对象实例
     * @param name         方法名
     * @param requestData  请求数据
     */
  async handleGrpcClientMethod(clientInStance, name, requestData) {
    const { app } = this;
    if (typeof requestData !== 'object') {
      app.logger.error('[egg-grpc-client] grpc client method params error ,please look at docs');
      return;
    }
    return new Promise((resolve, reject) => {
      // todo 支持grpc传输字段 自定义
      clientInStance[name]({ data: JSON.stringify(requestData) }, (err, result) => {
        // 将结果反序列化，
        if (err == null) {
          const { data } = result;
          if (data == null) {
            app.logger.info('[egg-grpc-client] no key-word data in rpc message struct ,please check .proto file');
            return;
          }
          resolve(JSON.parse(data));
        }
        reject(err, result);
      });
    });
  }
}


module.exports = loadProto;
