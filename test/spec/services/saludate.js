'use strict';

describe('Service: saludate', function () {

  // load the service's module
  beforeEach(module('testAppApp'));

  // instantiate service
  var saludate;
  beforeEach(inject(function (_saludate_) {
    saludate = _saludate_;
  }));

  it('should do something', function () {
    expect(!!saludate).toBe(true);
  });

});
