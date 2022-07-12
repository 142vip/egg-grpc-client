'use strict';

const path = require('path');
const loadProto = require('./loadProto');
const assert = require('assert');

/**
 * 生成grpc client实例
 * @param config
 * @param app
 */
async function creatGRPClientInstance(config, app) {


  assert(config.protoDir != null, '[egg-grpc-client] protoDir is not exist in config.js file , default protoDir: app/grpc');
  assert(config.serviceDir != null, '[egg-grpc-client] serviceDir is not exist in config.js file , default serviceDir: app/grpc');
  assert(config.host != null, '[egg-grpc-client] host is not exist in config.js file , default host: app/grpc');
  assert(config.port != null, '[egg-grpc-client] port is not exist in config.js file , default port: app/grpc');
  assert(config.loaderOptions != null, '[egg-grpc-client] loaderOptions is not exist in config.js file , please see https://github.com/142vip/egg-grpc-client/blob/master/config/config.default.js');

  const loadProtoInstance = new loadProto(app);
  const protoFileDir = path.join(app.baseDir, config.protoDir);
  return await loadProtoInstance.getGrpcClient(protoFileDir, config);
}

module.exports = {
  creatGRPClientInstance,
};
