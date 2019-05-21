'use strict';


const aiImage = require('./lib/ai-image');
const cos = require('./lib/cos');
const sms = require('./lib/sms');

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
