'use strict';

const path = require('path');
const loadProto = require('./loadProto');

/**
 * 生成grpc client实例
 * @param config
 * @param app
 */
async function creatGRPClientInstance(config, app) {
  const loadProtoInstance = new loadProto(app);
  const protoFileDir = path.join(app.baseDir, config.protoDir);
  return await loadProtoInstance.getGrpcClient(protoFileDir, config);
}

module.exports = {
  creatGRPClientInstance,
};
