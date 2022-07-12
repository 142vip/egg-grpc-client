'use strict';
const { creatGRPClientInstance } = require('./libs');
const assert = require('assert');
module.exports = agent => {
  const now = new Date().getTime();

  const config = agent.config.grpcClient;

  assert(typeof config.agent === 'boolean', `[egg-grpc-client] app just is true or false , but now agent is ${config.agent}`);
  assert(!(config.client == null && config.clients == null) || (config.client != null && config.clients != null), '[egg-grpc-client] only one can exist between client and clients in config.js file');
  // 启动之前
  agent.beforeStart(async () => {
    if (config.agent) {
      // 加载到agent对象上，创建一个实例
      agent.addSingleton('grpcClient', await creatGRPClientInstance);
      agent.logger.info(`[egg-grpc-client] load grpc client to agent.js (${new Date().getTime() - now}ms)`);
    }
  });


};
