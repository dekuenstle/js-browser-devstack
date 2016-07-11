var assert = require('chai').assert;

var MyApp = require('../dist/bundle.js').default;

describe('MyApp', function() {
  it('should greet', function () {
      assert.equal('Hello World!', MyApp.greet);
  });
});
