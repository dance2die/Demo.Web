(function (factory, window, $, undefined) {
	"use strict";

	factory.createURL = function(baseURL) {
		return resolveURL(baseURL) + window.location.search;
	}

	// partially copied from http://weblogs.asp.net/joelvarty/resolveurl-in-javascript
	function resolveURL(url) {
		if (url.indexOf("~/") == 0) {
			url = baseUrl + url.substring(2);
		}

		if (url.slice(-1) === "/") {
			url = url.slice(0, -1);
		}

		return url;
	}
})(urlFactory = window.urlFactory || {}, window, jQuery);