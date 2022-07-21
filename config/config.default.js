'use strict';

/**
 *  配置选项：
 *      keepCase –保留字段名称。 默认设置是将它们更改为驼峰式。
 *      longs –应该用于表示long值的类型。 有效选项是Number和String 。 默认为库中的Long对象类型。
 *      enums –应该用于表示enum值的类型。 唯一有效的选项是String 。 默认为数值。
 *      bytes –应该用于表示bytes值的类型。 有效选项是Array和String 。 默认是使用Buffer 。
 *      defaults –在输出对象上设置默认值。 默认为false 。
 *      arrays –为空数组设置缺少的数组值，即使defaults值为false 。 默认为false 。
 *      objects –即使defaults值为false也为缺少的对象值设置空对象。 默认为false 。
 *      oneofs –将虚拟的oneof属性设置为当前字段的名称
 */
exports.grpcClient = {
  // protoDir: 'app/grpc',
  // serviceDir: 'app/grpc',
  // host: '127.0.0.1',
  // port: '50051',
  // loaderOptions: {
  //   keepCase: true,
  //   longs: String,
  //   enums: String,
  //   defaults: true,
  //   oneofs: true,
  //
  // },
  // client: {
  //   protoDir: 'app/grpc',
  //   serviceDir: 'app/grpc',
  //   host: '127.0.0.1',
  //   port: '50051',
  //   loaderOptions: {
  //     keepCase: true,
  //     longs: String,
  //     enums: String,
  //     defaults: true,
  //     oneofs: true,
  //   },
  // },
  // clients: {
  //   grpc_go: {
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
  app: true,
  agent: false,
};
