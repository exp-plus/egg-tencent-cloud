'use strict';
const assert = require('assert');
const mock = require('egg-mock');

const fs = require('fs');
const path = require('path');
const uuidv1 = require('uuid/v1');

describe('test/cos.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/tencent-cloud-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('生成临时密钥', async () => {
    const ctx = app.mockContext();
    const cos = app.config.cos.client;

    const keys = await ctx.cos.generateTemporaryKey(cos.Region, cos.Bucket, [ 'name/cos:PutObject' ], [ 'images/pack/*' ], 1000);
    assert(keys);
    assert(keys.credentials);
  });
  it('上传文件', async () => {
    const ctx = app.mockContext();
    const cos = app.config.cos.client;
    const buffer = fs.readFileSync(path.join(__dirname, 'upload.png'));
    const obj = {
      Region: cos.Region,
      Bucket: cos.Bucket,
      Host: cos.Host,
      Key: 'tests/' + uuidv1(),
      Body: buffer,
      ContentLength: buffer.length,
    };
    const res = await ctx.cos.putObject(obj);
    assert(res === obj.Host + obj.Key);
  });
});
