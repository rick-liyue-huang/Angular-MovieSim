

// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute',
  'moviecat.movie_detail',
  'moviecat.movie_list',

  'moviecat.directives.auto_focus'
  /*
  'moviecat.in_theaters',
  'moviecat.movie_list',
  'moviecat.top250'
  */
]).

constant('appConfig', {
	pageSize: 10,
	listApiAddress: 'http://api.douban.com/v2/movie/',
	detailApiAddress: 'http://api.douban.com/v2/movie/subject/'
}).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]).

controller('searchController', ['$scope', '$route', 'appConfig', function($scope, $route, appConfig) {
	// console.log(appConfig);
	$scope.input = '';
	$scope.search = function() {
		console.log($scope.input);

		$route.updateParams({category: 'search', q:$scope.input});

	};

}])


/* if we use controller to deal with the focus on li, we will use the following codes...

.controller('navController', ['$scope', '$location', function($scope, $location) {


	console.log($location.path());
	$scope.$location = $location;
	$scope.$watch('$location.path()', function(now) {

		// var path = $location.path();

		if (now.startsWith('/top250')) {
			$scope.type = 'top250';
		} else if (now.startsWith('/in_theaters')) {
			$scope.type = 'in_theaters';
		} else if (now.startsWith('/coming_soon')) {
			$scope.type = 'coming_soon';
		}
		console.log($scope.type);
	});

}])*/;








































