'use strict';

angular
  .module('appQuoteApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/quote/:id', {
        templateUrl: 'views/quote.html',
        controller: 'QuoteCtrl'
      })
      .when('/news/:id', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
