(function(angular) {


	// create the moduel of 'coming_soon'
	var module = angular.module('moviecat.movie_list', ['ngRoute', 'moviecat.service.http'])

	// config the route in 'coming_soon'
	module.config(['$routeProvider', function($routeProvider) {

			$routeProvider
				.when('/:category/:page', {
					templateUrl: 'movie_list/view.html',
					controller: 'movieListController'
				});
		}]);

	module.controller('movieListController', [
		'$scope',
		'$routeParams',
		'$route',
		'httpService',
		function($scope, $routeParams, $route, httpService) {


		// divide to data and actions
		// and also match the 'webapi.json' file http://api.douban.com/v2/movie/coming_soon?count=3&start=5

		// $scope.subjects = data;
		var count = 10;
		var page = parseInt($routeParams.page);
		var start = (page - 1) * count;


		$scope.subjects = [];
		$scope.message = '';
		$scope.totalPages = 0;
		$scope.title = '';
		$scope.totalCount = 0;
		$scope.currentPage = page;

		httpService.jsonp('http://api.douban.com/v2/movie/' + $routeParams.category, {start: start, count: count}, function(res) {
			// console.log(res);

			$scope.title = res.title;
			$scope.subjects = res.subjects;
			console.log($scope.subjects);
			$scope.totalCount = res.total;
			$scope.totalPages = Math.ceil($scope.totalCount / count);

			// in order to load the async data
			$scope.$apply();

			// expose the actions -- next page and pre page
			$scope.goPage = function(page) {

				// 'page' is the target page
				if (page >= 1 && page <= $scope.totalPages) {
					$route.updateParams({page:page});
				}
			};

		});

		/*
		// test $http
		var doubanApiAddress = 'http://api.douban.com/v2/movie/coming_soon';
		$http.jsonp(doubanApiAddress + '?callback=JSON_CALLBACK').then(function(res) {

			// here has the async,

			if (res.status === 200) {
				$scope.subjects = res.data.subjects;
				console.log(res);
			} else {
				$scope.message = 'get data wrong'+res.statusText;
			}


			console.log(data);

		}, function(err){
			console.log(err);
			$scope.message="get data wrong"+err.statusText;
		});

		*/






	}]);

})(angular);



























