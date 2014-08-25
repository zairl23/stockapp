angular.module('stock.services',['ngResource'])
.factory('Stocks', function($resource){
    return $resource("/stock/new/:id", {id: '@stocklistId'});
});

