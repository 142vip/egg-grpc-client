## egg-grpc-client

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-grpc-client.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-grpc-client
[travis-image]: https://img.shields.io/travis/eggjs/egg-grpc-client.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-grpc-client
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-grpc-client.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-grpc-client?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-grpc-client.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-grpc-client
[snyk-image]: https://snyk.io/test/npm/egg-grpc-client/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-grpc-client
[download-image]: https://img.shields.io/npm/dm/egg-grpc-client.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-grpc-client


### 支持的功能

- [x] 支持单个grpc-server服务端连接实例
- [x] 支持多个grpc-server服务端连接实例

### 安装

```bash
## 安装最新版grpc-client插件
npm i @142vipegg-grpc-client --save

## 安装制定版本grpc-client插件
npm i @142vipegg-grpc-client@xxx --save
```

### 快速使用

在plugin.js插件配置文件中配置egg-grpc-client
```js
// {app_root}/config/plugin.js
exports.grpcClient = {
  enable: true,
  package: '@142vipegg-grpc-client',
};
```

### 默认配置

```js
// {app_root}/config/config.default.js
exports.grpcClient = {
    // 默认配置，会填充到每个连接实例中
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
    clients: {
      gprc_go: {
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
      grpc_test: {
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
    },
};
```

更多默认配置，请查看[config/config.default.js](config/config.default.js)

### 使用示例

```js
// 连接单个grpc server时

ctx.grpcClient.xxx

// 连接多个grpc server用例时
ctx.grpcClient.get('xxx').xxxx

```

完整grpc客户端、服务端插件使用示例，可以参考[142vip/egg-grpc-demo](https://github.com/142vip/egg-grpc-demo)

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
