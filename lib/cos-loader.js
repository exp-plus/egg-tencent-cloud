'use strict';
const assert = require('assert');
const COS = require('./cos');
module.exports = app => {
  app.addSingleton('cos', (config, app) => {
    // 参数
    assert(config.SecretId && config.SecretKey && config.appId);

    // 启动
    const cos = new COS(config.SecretId, config.SecretKey, config.appId);
    app.coreLogger.info('[egg-cos]\t\t初始化成功');
    return cos;
  });
};

