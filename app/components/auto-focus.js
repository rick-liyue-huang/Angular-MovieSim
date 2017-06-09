(function(angular){

	angular.module('moviecat.directives.auto_focus', [])

		.directive('autoFocus', ['$location', function($location) {

			var path = $location.path();
			return {

				restrict: 'A',
				link: function($scope, iElm, iAttrs, controller) {
					// console.log(iElm);
					// console.log(iAttrs);



					var aLink = iElm.children().attr('href');
					var type = aLink.replace(/#(\/.+?)\/\d+/, '$1');
					if (path.startsWith(type)) {
						// visit the current link
						iElm.addClass('active');
					}

					// jLite
					iElm.on('click', function() {
						console.log(111);
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');

					})

				}
			}
		}])
})(angular);









































