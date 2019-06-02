'use strict';
const assert = require('assert');
const AiImage = require('./ai-image');

module.exports = app => {
  app.addSingleton('aiImage', (config, app) => {
    // 参数
    assert(config.SecretId && config.SecretKey && config.appid);

    // 启动
    const aiImage = new AiImage(config.SecretId, config.SecretKey, config.appid);
    app.coreLogger.info('[egg-aiImage]\t\t初始化成功');
    return aiImage;
  });
};
