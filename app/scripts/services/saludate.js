'use strict';

/**
 * @ngdoc service
 * @name testAppApp.saludate
 * @description
 * # saludate
 * Service in the testAppApp.
 */
angular.module('testAppApp')
  .service('saludate', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return function() {
      return 'Hello angular!';
    };
  });
