'use strict';

const { creatGRPClientInstance } = require('./libs');
module.exports = async agent => {
  const now = new Date().getTime();
  if (agent.config.agent) {
    // 加载到agent对象上，创建一个实例
    agent.addSingleton('grpcClient', await creatGRPClientInstance);
    agent.logger.info(`[egg-grpc-client] load grpc client to agent (${new Date().getTime() - now}ms)`);
  }
};
