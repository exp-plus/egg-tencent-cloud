'use strict';
const mock = require('egg-mock');

describe('test/sms.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/tencent-cloud-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);


  it('发送单条短信', async () => {
    const ctx = app.mockContext();
    const sms = app.config.sms.client;
    await ctx.sms.sendSingleSms('86', '13632102314', sms.templates[0].template_id, [ '参数1' ]);
  });
});
