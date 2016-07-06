'use strict';

describe('Service: suma', function () {

  // load the service's module
  beforeEach(module('testAppApp'));

  // instantiate service
  var suma;
  beforeEach(inject(function (_suma_) {
    suma = _suma_;
  }));

  it('should do something', function () {
    expect(!!suma).toBe(true);
  });

});
