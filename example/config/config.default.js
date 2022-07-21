'use strict';
module.exports = appInfo => {
  const config = (exports = {});
  config.keys = appInfo.name + '_142vip';
  config.grpcClient = {
    app: true,
    agent: false,
    // 支持单个grpc-server连接实例
    client: {
      protoDir: 'app/grpc',
      serviceDir: 'app/grpc',
      host: '127.0.0.1',
      port: '50051',
      loaderOptions: {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
      },
    },
    // 支持多个grpc-server连接实例
    // clients: {
    //   gprc_go: {
    //     protoDir: 'app/grpc',
    //     serviceDir: 'app/grpc',
    //     host: '127.0.0.1',
    //     port: '50051',
    //     loaderOptions: {
    //       keepCase: true,
    //       longs: String,
    //       enums: String,
    //       defaults: true,
    //       oneofs: true,
    //     },
    //   },
    //   grpc_test: {
    //     protoDir: 'app/grpc',
    //     serviceDir: 'app/grpc',
    //     host: '127.0.0.1',
    //     port: '50051',
    //     loaderOptions: {
    //       keepCase: true,
    //       longs: String,
    //       enums: String,
    //       defaults: true,
    //       oneofs: true,
    //     },
    //   },
    // },
  };
  config.cluster = {
    listen: {
      port: 12306,
      host: '0.0.0.0',
    },
  };
  return config;
};
