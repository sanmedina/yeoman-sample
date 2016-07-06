(function() {
  var app = angular.module('store', ['store-products']);

  /*
  Some services:
  --$http
  --$log
  --$filter
  */
  app.controller('StoreController', ['$http', function($http) {
    // Single product example
    this.product = gem;

    // Multiple products example
    var store = this;
    store.products = [];
    $http.get('/products.json').success(function(data) {
      store.products = data;
    });
  }]);

  app.controller('PanelController', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .',
    canPurchase: true,
    soldOut: false,
    images: [
      {
        full: 'img.png'
      }
    ]
  };

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Some number of angules',
      canPurchase: true,
      reviews: [
        {
          stars: 5,
          body: "I love this product <3",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks",
          author: "tim@hater.com"
        }
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Five angles',
      canPurchase: false,
      reviews: [
        {
          stars: 3,
          body: "It's ok",
          author: "doe@tim.com"
        },
        {
          stars: 1,
          body: "This product sucks",
          author: "tim@hater.com"
        }
      ]
    }
  ];
})();
