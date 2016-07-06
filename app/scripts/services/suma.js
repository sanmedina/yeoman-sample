'use strict';

/**
 * @ngdoc service
 * @name testAppApp.suma
 * @description
 * # suma
 * Service in the testAppApp.
 */
angular.module('testAppApp')
  .service('suma', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var CONST = 1;

    this.resta = function(a, b) {
      return a - b;
    };

    this.suma = function(a, b) {
      return a + b + CONST;
    };
  });
