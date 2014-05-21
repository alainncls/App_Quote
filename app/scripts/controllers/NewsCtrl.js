'use strict';

angular.module('appQuoteApp')
  .controller('NewsCtrl', function ($scope, $http, $routeParams) {
	$scope.selectN = [];

	$http.get('http://192.168.14.138:9292/quotes/news/' + $routeParams.id).success(function(data){
		$scope.selectN=data;
	});
});