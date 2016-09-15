'use strict';

describe('Controller: MienbrosCtrl', function () {

  // load the controller's module
  beforeEach(module('prototipoApp'));

  var MienbrosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MienbrosCtrl = $controller('MienbrosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
