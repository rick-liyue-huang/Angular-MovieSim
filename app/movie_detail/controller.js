(function(angular) {


	// create the moduel of 'coming_soon'
	var module = angular.module('moviecat.movie_detail', ['ngRoute', 'moviecat.service.http'])

	// config the route in 'coming_soon'
	module.config(['$routeProvider', function($routeProvider) {

			$routeProvider
				.when('/detail/:id', {
					templateUrl: 'movie_detail/view.html',
					controller: 'movieDetailController'
				});
		}]);

	module.controller('movieDetailController', [
		'$scope',
		'$routeParams',
		'$route',
		'httpService',
		'appConfig',
		function($scope, $routeParams, $route, httpService, appConfig) {

			$scope.movie = {};
			var id = $routeParams.id;
			$scope.loading = true;

			var apiAddress = appConfig.detailApiAddress + id;

			httpService.jsonp(apiAddress, {}, function(res) {
				$scope.movie = res;
				$scope.loading = false;
				$scope.$apply();
			});




	}]);

})(angular);



























