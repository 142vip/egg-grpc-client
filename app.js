'use strict';
const { creatGRPClientInstance } = require('./libs');
const assert = require('assert');
module.exports = app => {
  const now = new Date().getTime();
  const config = app.config.grpcClient;
  assert(typeof config.app === 'boolean', `[egg-grpc-client] app just is true or false , but now agent is ${config.agent}`);
  assert(!(config.client == null && config.clients == null) || (config.client != null && config.clients != null), '[egg-grpc-client] only one can exist between client and clients in config.js file');
  // 启动之前
  app.beforeStart(async () => {
    if (config.app) {
      // 加载到agent对象上，创建一个实例
      app.addSingleton('grpcClient', await creatGRPClientInstance);
      app.logger.info(`[egg-grpc-client] load grpc client to app.js (${new Date().getTime() - now}ms)`);
    }
  });
};

