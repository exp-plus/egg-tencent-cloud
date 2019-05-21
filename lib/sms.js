'use strict';
const assert = require('assert');
const QcloudSms = require('qcloudsms_js');
const { ThirdPartyError, InternalServerError } = require('@exp-plus/exception');


/**
 * Tencent SMS Client
 * @class
 */
class SMS {

  constructor(appid, appkey, sign) {
    this.sign = sign;
    this.qcloudsms = QcloudSms(appid, appkey);
  }
  /**
     * 发送单条短信
     * @see 文档 https://cloud.tencent.com/document/product/382/5976
     *
     * @param {String} country_code  城市代码
     * @param {String} phone 电话号码
     * @param {*} template_id 模板 id
     * @param {*} params 模板对应的参数
     */
  async sendSingleSms(country_code, phone, template_id, params) {
    const ssender = this.qcloudsms.SmsSingleSender();
    return new Promise((resolve, reject) => {
      ssender.sendWithParam(country_code, phone, template_id, params, this.sign, '', '', function(err, res, resData) {
        if (err) {
          reject(new ThirdPartyError('短信发送错误', err));
        } else {
          if (resData.result !== 0) {
            reject(new InternalServerError('短信发送错误', resData));
          } else {
            resolve(resData);
          }
        }
      });
    });
  }

  /**
     * 发送多条短信
     * @see 文档 https://cloud.tencent.com/document/product/382/5977
     *
     * @param {String} country_code  城市代码
     * @param {[String]} phones 电话号码列表
     * @param {Number} template_id 模板 id
     * @param {[String]} params 模板对应的参数
     */
  async sendMultiSms(country_code, phones, template_id, params) {
    const msender = this.qcloudsms.SmsMultiSender();
    return new Promise((resolve, reject) => {
      msender.sendWithParam(country_code, phones, template_id,
        params, this.sign, '', '',
        function(err, res, resData) {
          if (err) {
            reject(new ThirdPartyError('短信发送错误', err));
          } else {
            if (resData.result !== 0) {
              reject(new InternalServerError('短信发送错误', resData));
            } else {
              resolve(resData);
            }
          }
        });
    });
  }
}
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

