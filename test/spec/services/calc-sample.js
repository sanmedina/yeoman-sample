'use strict';

describe('Service: calcSample', function () {

  // load the service's module
  beforeEach(module('testAppApp'));

  // instantiate service
  var calcSample;
  beforeEach(inject(function (_calcSample_) {
    calcSample = _calcSample_;
  }));

  it('should do something', function () {
    expect(!!calcSample).toBe(true);
  });

});
