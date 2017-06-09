(function(angular) {

	// create the moduel of 'in_theaters'
	var module = angular.module('moviecat.top250', ['ngRoute'])

	// config the route in 'in_theaters'
	module.config(['$routeProvider', function($routeProvider) {

			$routeProvider
				.when('/top250', {
					templateUrl: 'top250/view.html',
					controller: 'top250Controller'
				});
		}]);

	module.controller('top250Controller', ['$scope', function($scope) {

	}]);

})(angular);



























