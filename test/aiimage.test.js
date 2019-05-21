'use strict';
const assert = require('assert');
const mock = require('egg-mock');

describe('test/aiimage.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/tencent-cloud-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('检测图片违规程度', async () => {
    const ctx = app.mockContext();
    const result = await ctx.aiImage.detectPorn('https://sqimg.qq.com/qq_product_operations/im/qqlogo/imlogo_b.png');
    assert(result.hot_score);
    assert(result.confidence);
  });
});
