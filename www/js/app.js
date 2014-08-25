angular.module('stock', ['ionic', 'stock.controllers', 'stock.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html",
          controller: "SearchCtrl"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })

    .state('app.stocklists', {
      url: "/stocklists",
      views: {
        'menuContent' :{
          templateUrl: "templates/stocklists.html",
          controller: 'StocklistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/stocklists/:stocklistId/:name",
      views: {
        'menuContent' :{
          templateUrl: "templates/stocklist.html",
          controller: 'StocklistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/stocklists');
});

