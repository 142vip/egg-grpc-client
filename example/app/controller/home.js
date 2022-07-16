'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  /**
   * 用例方法
   */
  async index() {
    const { ctx,app } = this;
    // 多用例时，采用ctx.grpcClient.get('xxxx').healthCheck..
    const result=await ctx.grpcClient.healthCheck({
      name:'healthCheck',
      description:"公众号：Rong姐姐好可爱"
    })
    const methodList=Object.keys(ctx.grpcClient)
    app.logger.info(`[egg-grpc-client] client 挂载的方法有：${methodList}`)
    app.logger.info(`[egg-grpc-server] back data:`,result)
    ctx.body = 'hi, young coder! 我是公众号作者：Rong姐姐好可爱';
  }


}

module.exports = HomeController;
