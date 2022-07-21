'use strict';

const GrpcClient = Symbol('Context#grpcClient');

module.exports = {
  /**
   * 新增grpcClient属性，ctx.grpcServer.xxx
   * @return {*}
   */
  get grpcClient() {
    if (!this[GrpcClient]) {
      this[GrpcClient] = this.app.grpcClient;
    }
    return this[GrpcClient];
  },
};
