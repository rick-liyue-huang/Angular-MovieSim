
(function(angular){


	// because angular.js async request object defaultly can not support  self-defined callback.
	var http = angular.module('moviecat.service.http', []);
	http.service('httpService', ['$window', '$document', function($window, $document) {


		this.jsonp = function(url, data, callback) {

			var fnSuffix = Math.random().toString().replace('.', '');
			var cbFuncName = 'my_json_cb_' + fnSuffix;
			window[cbFuncName] = callback;

			var queryString = url.indexOf('?') == -1 ? '?': '&';
			for (var key in data) {
				queryString += (key + '=' + data[key] + '&');
			}

			// special for douban 'callback'
			queryString += 'callback=' + cbFuncName;

			var scriptElement = $document[0].createElement('script');
			scriptElement.src = url + queryString;

			$document[0].body.appendChild(scriptElement);

		};

		console.log($window);
		console.log($document);

	}])
})(angular);





























