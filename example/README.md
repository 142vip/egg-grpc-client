## @142vip/egg-grpc-client插件使用示例

### 快速开始

安装@142vip/egg-grpc-client插件

```bash
## 安装最新版本
npm install @142vip/egg-grpc-client
## 安装指定版本
npm install @142vip/egg-grpc-client@xxx
```

在config.js中配置：

```javascript
// 默认配置
config.grpcClient = {
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
    agent: false, // 是否在agent.js中加载，默认false
    app: true,
};
```

按照配置中`protoDir`和`serviceDir`字段来确定对应的`js`和`proto`，例如，新建app/grpc目录，写下对应的proto文件和js函数类，可以直接看示例

### 运行项目

```bash
## 安装依赖
npm install
## 运行项目
npm run dev
## 可以看到grpc和服务启动的日志输出
2022-07-21 12:24:39,122 INFO 2034 [master] agent_worker#1:2037 started (832ms)
2022-07-21 12:24:39,971 INFO 2040 [egg-grpc-client] load grpc client to app.js (136ms)
2022-07-21 12:24:40,012 INFO 2034 [master] egg started on http://127.0.0.1:12306 (1724ms)

## 打开浏览器，访问grpc client示例
open http://127.0.0.1:12306

```

### 部署

```bash
## 启动服务
npm run start
## 暂停服务
npm run stop
```

### 证书

```text
MIT License

Copyright (c) 2022 142vip FairySister Rong姐姐好可爱

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```