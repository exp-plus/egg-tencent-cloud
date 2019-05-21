'use strict';

module.exports = {
  /**
   * AiImage Singleton instance
   * @member Context#aiImage
   * @since 1.0.0
   * @see App#aiImage
   */
  get aiImage() {
    return this.app.aiImage;
  },

  /**
   * COS Singleton instance
   * @member Context#cos
   * @since 1.0.0
   * @see App#cos
   */
  get cos() {
    return this.app.cos;
  },

  /**
   * SMS Singleton instance
   * @member Context#sms
   * @since 1.0.0
   * @see App#sms
   */
  get sms() {
    return this.app.sms;
  },
};
