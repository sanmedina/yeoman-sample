(function() {
  var app = angular.module('store-products', []);

  app.directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productTitleA', function() {
    return {
      restrict: 'A',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: 'PanelController',
      controllerAs: 'panel'
    };
  });
})();
