(function(angular){

	angular.module('moviecat.directives.auto_focus', [])

		.directive('autoFocus', ['$location', function($location) {

			// var path = $location.path();
			return {

				restrict: 'A',
				link: function($scope, iElm, iAttrs, controller) {
					// console.log(iElm);
					// console.log(iAttrs);

					$scope.$location = $location;
					$scope.$watch('$location.path()', function(now) {

						// when path change, it will trigger, 'now' is the after trigger value of path
						var aLink = iElm.children().attr('href');
						var type = aLink.replace(/#(\/.+?)\/\d+/, '$1');
						if (now.startsWith(type)) {
							// visit the current link
							iElm.parent().children().removeClass('active');
							iElm.addClass('active');
						}
					});

					// jLite
					// because it will watch the path, so do not need the .on function
					/*
					iElm.on('click', function() {
						console.log(111);
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');

					})
					*/

				}
			}
		}])
})(angular);









































