'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the testAppApp
 */
angular.module('testAppApp')
  .controller('ContactCtrl', ['$scope', 'suma', 'saludate', 'calcSample', function ($scope, suma, saludate, calcSample) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.name = 'Pepito Perez';
    $scope.phone = '6000300';

    $scope.number1 = 0;
    $scope.number2 = 0;
    $scope.result = 0;

    $scope.sumar = function() {
      $scope.result = suma.suma($scope.number1, $scope.number2);
    };

    $scope.less = function() {
      $scope.result = suma.resta($scope.number1, $scope.number2);
    };

    $scope.times = function() {
      $scope.result = calcSample.someMethod().times($scope.number1, $scope.number2);
    }

    $scope.divide = function() {
      $scope.result = calcSample.divide($scope.number1, $scope.number2);
    }

    $scope.saludate = function() {
      $scope.result = saludate();
    };
  }]);
