'use strict';
const { creatGRPClientInstance } = require('./libs');
module.exports = async app => {
  const now = new Date().getTime();
  const config = app.config.grpcClient;
  if (config == null) {
    app.logger.error(`[egg-grpc-client] no grpcClient options in config file! (${new Date().getTime() - now}ms)`);
    return;
  }
  // todo 考虑挂载到ctx上
  // const client = await creatGRPClientInstance(config, app);
  // app.addSingleton('grpcClient', await creatGRPClientInstance);
  app.grpcClient = await creatGRPClientInstance(config, app);
};

