(function (factory, window, $, undefined) {
	"use strict";

	factory.createURL = function(baseURL) {
		return dropLastSlash(baseURL) + window.location.search;
	}

	function dropLastSlash(url) {
		// "url.slice(-1)" returns last character in a string
		// e.g.) "abc".slice(-1) returns "c"
		if (url.slice(-1) === "/") {
			// "url.slice(0, -1)" returns a string except last character
			// e.g.) "abc".slice(0, -1) returns "ab"
			url = url.slice(0, -1);
		}

		return url;
	}
})(urlFactory = window.urlFactory || {}, window, jQuery);