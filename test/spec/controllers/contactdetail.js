'use strict';

describe('Controller: ContactdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('testAppApp'));

  var ContactdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactdetailCtrl = $controller('ContactdetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactdetailCtrl.awesomeThings.length).toBe(3);
  });
});
