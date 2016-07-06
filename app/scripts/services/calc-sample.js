'use strict';

/**
 * @ngdoc service
 * @name testAppApp.calcSample
 * @description
 * # calcSample
 * Factory in the testAppApp.
 */
angular.module('testAppApp')
  .factory('calcSample', function () {
    // Service logic
    // ...

    var calc = {};

    calc.times = function(a, b) {
      return a * b;
    };

    // Public API here
    return {
      someMethod: function () {
        return calc;
      },
      divide: function(a, b) {
        return a / b;
      }
    };
  });
