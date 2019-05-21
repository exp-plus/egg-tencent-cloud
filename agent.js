'use strict';


const aiImage = require('./lib/ai-image');
const cos = require('./lib/cos');
const sms = require('./lib/sms');

module.exports = agent => {
  if (agent.config.aiImage.useAgent && agent.config.aiImage.client) {
    aiImage(agent);
  }
  if (agent.config.cos.useAgent && agent.config.cos.client) {
    cos(agent);
  }
  if (agent.config.sms.useAgent && agent.config.sms.client) {
    sms(agent);
  }
};
