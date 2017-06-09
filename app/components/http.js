

// encap the jsonp
(function(angular){


	// because angular.js async request object defaultly can not support  self-defined callback.
	var http = angular.module('moviecat.service.http', []);
	http.service('httpService', ['$window', '$document', function($window, $document) {


		this.jsonp = function(url, data, callback) {

			var queryString = url.indexOf('?') == -1 ? '?': '&';
			for (var key in data) {
				queryString += (key + '=' + data[key] + '&');
			}

			var fnSuffix = Math.random().toString().replace('.', '');
			var cbFuncName = 'my_json_cb_' + fnSuffix;
			// special for douban 'callback'
			queryString += 'callback=' + cbFuncName;

			var scriptElement = $document[0].createElement('script');
			scriptElement.src = url + queryString;

			window[cbFuncName] = function(data) {
				callback(data);
				$document[0].body.removeChild(scriptElement);
			};

			$document[0].body.appendChild(scriptElement);

		};

		console.log($window);
		console.log($document);

	}])
})(angular);

/*
(function(window, document, undefined) {

	var jsonp = function(url, data, callback) {

		// 1.挂载一个回调函数
		var cbFuncName = 'my_json_cb_' + Math.random().toString().replace('.', '');
		window[cbFuncName] = callback;

		// 2. 将data转换成字符串
		//  {id:1, name:'rick'} => 'id=1&name=rick'
		var queryString = url.indexOf('?') == -1 ? '?': '&';
		for (var key in data) {
			queryString += (key + '=' + data[key] + '&');
		}

		// 3.处理url中的回调函数
		//  url += callback=XXXX

		queryString += 'callback=' + cbFuncName;
		// queryString =    ?id=1&name=rick&cb=cb=my_json_cb_0897239872

		// 3.创建一个script标签
		var scriptElement = document.createElement('script');
		scriptElement.src = url + queryString;

		// 此时还不能append 到页面上，因为已放到上面去就马上执行，

		// 4.将script标签放到页面中, append过后
		document.body.appendChild(scriptElement);
	};

	window.$jsonp = jsonp;

})(window, document);

*/



























