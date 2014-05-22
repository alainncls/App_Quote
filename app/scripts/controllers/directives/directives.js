'use strict';
angular
	.module('appQuoteApp').directive('quoteDisplay',function(){
		return {
			restrict: 'AEC',
			templateUrl:'views/quote.html'
		}
	}).directive('newsDisplay',function(){
		return {
			restrict: 'AEC',
			templateUrl:'views/news.html'
		}
	});