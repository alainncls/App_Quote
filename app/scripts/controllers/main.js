'use strict';

angular.module('appQuoteApp')
  .controller('MainCtrl', function ($scope, $http) {
	$scope.quotes = [];
	$scope.news = [];

	$http.get('http://192.168.14.138:9292/quotes/quotes').success(function(data){
		$scope.quotes=data;
	});

	$http.get('http://192.168.14.138:9292/quotes/news').success(function(data){
		$scope.news=data;
	});

	$scope.addComment = function() {
		$scope.quotes.push({quote:$scope.quote, author:$scope.author});

		$http.post('http://192.168.14.138:9292/quotes/quotes', {quote:$scope.quote, author:$scope.author, date:new Date()}).success(function(data){});
		$scope.quote = '';
		$scope.author = '';
	};
	$scope.removeComment = function($id, $index) {
		$http.delete('http://192.168.14.138:9292/quotes/quotes/'+$id).success(function(data){
			$scope.quotes.splice($index, 1);
		});
	}
	$scope.removeNew = function($id, $index) {
		$http.delete('http://192.168.14.138:9292/quotes/news/'+$id).success(function(data){
			$scope.news.splice($index, 1);
		});
	}
	$scope.addNew = function() {
		$scope.news.push({news:$scope.shortN, author:$scope.author, });

		$http.post('http://192.168.14.138:9292/quotes/news', {news_short:$scope.shortN, author:$scope.authorN, news_long:'', date:new Date()}).success(function(data){});
		$scope.shortN = '';
		$scope.authorN = '';
	};
  });
