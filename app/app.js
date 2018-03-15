'use strict';

// Declare app level module which depends on views, and components
angular.module('typhoon', [
  'ngRoute',
  'typhoon.controllers',
  'typhoon.services'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/typhoon'});
}]);

angular.module('typhoon.controllers', ['ngRoute', 'ui.bootstrap'])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/typhoon', {
    templateUrl: 'templates/dashboard.html',
    controller: 'View1Ctrl',
	  resolve:{
		  'TyphoonData':function(Typhoon){
			  return Typhoon.promise;
		  }
	  }
  });
}]);

angular.module('typhoon.services',[]);