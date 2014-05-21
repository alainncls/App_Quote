'use strict';

angular.module('appQuoteApp')
  .controller('QuoteCtrl', function ($scope, $http, $routeParams) {
	$scope.select = [];

	$http.get('http://192.168.14.138:9292/quotes/quotes/' + $routeParams.id).success(function(data){
		$scope.select=data;
	});
});