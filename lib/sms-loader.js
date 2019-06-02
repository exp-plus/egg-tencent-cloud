'use strict';
const assert = require('assert');
const SMS = require('./sms');

module.exports = app => {
  app.addSingleton('sms', (config, app) => {
    // 参数
    assert(config.appid && config.appkey && config.sign);

    // 启动
    const sms = new SMS(config.appid, config.appkey, config.sign);
    app.coreLogger.info('[egg-sms]\t\t初始化成功');
    return sms;
  });
};

