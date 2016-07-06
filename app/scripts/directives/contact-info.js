'use strict';

/**
 * @ngdoc directive
 * @name testAppApp.directive:contactInfo
 * @description
 * # contactInfo
 */
angular.module('testAppApp')
  .directive('contactInfo', function () {
    // return {
    //   template: '<div></div>',
    //   restrict: 'E',
    //   link: function postLink(scope, element, attrs) {
    //     element.text('this is the contactInfo directive');
    //   }
    // };
    return {
      templateUrl: 'views/contact-info.html',
      restrict: 'E'
    };
  });
