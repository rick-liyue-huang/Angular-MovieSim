(function(angular) {

/*
	var data = [
		{
			"rating": {
				"max": 10,
				"average": 7.4,
				"stars": "40",
				"min": 0
			},
			"genres": [
				"动作",
				"奇幻",
				"冒险"
			],
			"title": "加勒比海盗5：死无对证",
			"casts": [
				{
					"alt": "https://movie.douban.com/celebrity/1054456/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/562.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/562.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/562.jpg"
					},
					"name": "约翰尼·德普",
					"id": "1054456"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1054414/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/587.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/587.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/587.jpg"
					},
					"name": "哈维尔·巴登",
					"id": "1054414"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1010543/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/1243.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/1243.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/1243.jpg"
					},
					"name": "杰弗里·拉什",
					"id": "1010543"
				}
			],
			"collect_count": 116325,
			"original_title": "Pirates of the Caribbean: Dead Men Tell No Tales",
			"subtype": "movie",
			"directors": [
				{
					"alt": "https://movie.douban.com/celebrity/1019391/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/58032.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/58032.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/58032.jpg"
					},
					"name": "艾斯彭·山德伯格",
					"id": "1019391"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1216851/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/58031.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/58031.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/58031.jpg"
					},
					"name": "乔阿吉姆·罗恩尼",
					"id": "1216851"
				}
			],
			"year": "2017",
			"images": {
				"small": "http://img6.douban.com/view/movie_poster_cover/ipst/public/p2459723975.jpg",
				"large": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2459723975.jpg",
				"medium": "http://img6.douban.com/view/movie_poster_cover/spst/public/p2459723975.jpg"
			},
			"alt": "https://movie.douban.com/subject/6311303/",
			"id": "6311303"
		},
		{
			"rating": {
				"max": 10,
				"average": 9.2,
				"stars": "45",
				"min": 0
			},
			"genres": [
				"剧情",
				"传记",
				"运动"
			],
			"title": "摔跤吧！爸爸",
			"casts": [
				{
					"alt": "https://movie.douban.com/celebrity/1031931/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/13628.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/13628.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/13628.jpg"
					},
					"name": "阿米尔·汗",
					"id": "1031931"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1372457/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/1493121366.9.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/1493121366.9.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/1493121366.9.jpg"
					},
					"name": "法缇玛·萨那·纱卡",
					"id": "1372457"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1372458/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/1493121856.81.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/1493121856.81.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/1493121856.81.jpg"
					},
					"name": "桑亚·玛荷塔",
					"id": "1372458"
				}
			],
			"collect_count": 290792,
			"original_title": "Dangal",
			"subtype": "movie",
			"directors": [
				{
					"alt": "https://movie.douban.com/celebrity/1366907/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/1484120321.24.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/1484120321.24.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/1484120321.24.jpg"
					},
					"name": "涅提·蒂瓦里",
					"id": "1366907"
				}
			],
			"year": "2016",
			"images": {
				"small": "http://img6.douban.com/view/movie_poster_cover/ipst/public/p2457983084.jpg",
				"large": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2457983084.jpg",
				"medium": "http://img6.douban.com/view/movie_poster_cover/spst/public/p2457983084.jpg"
			},
			"alt": "https://movie.douban.com/subject/26387939/",
			"id": "26387939"
		},
		{
			"rating": {
				"max": 10,
				"average": 6.6,
				"stars": "35",
				"min": 0
			},
			"genres": [
				"动画",
				"冒险"
			],
			"title": "哆啦A梦：大雄的南极冰冰凉大冒险",
			"casts": [
				{
					"alt": "https://movie.douban.com/celebrity/1024195/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/1375424738.93.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/1375424738.93.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/1375424738.93.jpg"
					},
					"name": "水田山葵",
					"id": "1024195"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1326329/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/1358580306.49.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/1358580306.49.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/1358580306.49.jpg"
					},
					"name": "大原惠美",
					"id": "1326329"
				},
				{
					"alt": "https://movie.douban.com/celebrity/1020284/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/36838.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/36838.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/36838.jpg"
					},
					"name": "嘉数由美",
					"id": "1020284"
				}
			],
			"collect_count": 7734,
			"original_title": "ドラえもん のび太の南極カチコチ大冒険",
			"subtype": "movie",
			"directors": [
				{
					"alt": "https://movie.douban.com/celebrity/1331896/",
					"avatars": {
						"small": "http://img6.douban.com/img/celebrity/small/1496027709.75.jpg",
						"large": "http://img6.douban.com/img/celebrity/large/1496027709.75.jpg",
						"medium": "http://img6.douban.com/img/celebrity/medium/1496027709.75.jpg"
					},
					"name": "高桥敦史",
					"id": "1331896"
				}
			],
			"year": "2017",
			"images": {
				"small": "http://img6.douban.com/view/movie_poster_cover/ipst/public/p2459600525.jpg",
				"large": "http://img6.douban.com/view/movie_poster_cover/lpst/public/p2459600525.jpg",
				"medium": "http://img6.douban.com/view/movie_poster_cover/spst/public/p2459600525.jpg"
			},
			"alt": "https://movie.douban.com/subject/26839466/",
			"id": "26839466"
		}
	]

	*/

	// create the moduel of 'in_theaters'
	var module = angular.module('moviecat.in_theaters', ['ngRoute', 'moviecat.service.http'])

	// config the route in 'in_theaters'
	module.config(['$routeProvider', function($routeProvider) {

			$routeProvider
				.when('/in_theaters/:page', {
					templateUrl: 'in_theaters/view.html',
					controller: 'inTheatersController'
				});
		}]);

	module.controller('inTheatersController', ['$scope', '$routeParams', 'httpService', function($scope, $routeParams, httpService) {


		// divide to data and actions
		// and also match the 'webapi.json' file http://api.douban.com/v2/movie/in_theaters?count=3&start=5

		// $scope.subjects = data;
		var count = 10;
		var page = parseInt($routeParams.page);
		var start = (page - 1) * count;


		$scope.subjects = [];
		$scope.message = '';
		$scope.totalPages = 0;

		httpService.jsonp('http://api.douban.com/v2/movie/in_theaters', {start: start, count: count}, function(res) {
			// console.log(res);

			$scope.subjects = res.subjects;
			console.log($scope.subjects);
			$scope.totalCount = res.total;
			$scope.totalPages = Math.ceil($scope.totalCount / count);

			// in order to load the async data
			$scope.$apply();
		});

		/*
		// test $http
		var doubanApiAddress = 'http://api.douban.com/v2/movie/in_theaters';
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



























