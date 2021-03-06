'use strict';


const aiImage = require('./lib/ai-image-loader');
const cos = require('./lib/cos-loader');
const sms = require('./lib/sms-loader');

module.exports = app => {
  if (app.config.aiImage.client) {
    aiImage(app);
  }
  if (app.config.cos.client) {
    cos(app);
  }
  if (app.config.sms.client) {
    sms(app);
  }
};
