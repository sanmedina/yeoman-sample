'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(module('testAppApp'));

  var ContactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactCtrl = $controller('ContactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactCtrl.awesomeThings.length).toBe(3);
  });

  it('should have contact data', function() {
    expect(scope.name).toEqual('Pepito Perez');
    expect(scope.phone).toEqual('6000300');
  });
});
