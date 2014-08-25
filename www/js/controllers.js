angular.module('stock.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('StocklistsCtrl', function($scope) {
  $scope.stocklists = [
    { title: '长白山', id: 'sh603099' },
    { title: '万科A', id: 'sz000002' },
    { title: '工商银行', id: 'sh601398' },
    { title: '中视传媒', id: 'sh600088' },
    { title: '乐视网', id: 'sz300104' },
    { title: '南方航空', id: 'sh600029'}
  ];
})

.controller('TestCtrl', function($scope, Stocks){
    $scope.show = Stocks.get();
})

.controller('SearchCtrl', function($scope) {
    $scope.search = {
        stockNum: "请输入上指或深指股票代码"
    };
})

.controller('StocklistCtrl', function($scope, $stateParams, Stocks) {
    $scope.show = Stocks.get({id: $stateParams.stocklistId});
    $scope.title = $stateParams.name;
    $scope.stockNum = $stateParams.stocklistId;
});
