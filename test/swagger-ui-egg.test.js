'use strict';

const mock = require('egg-mock');

describe('test/swagger-ui-egg.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/swagger-ui-egg-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, swaggerUiEgg')
      .expect(200);
  });
});
