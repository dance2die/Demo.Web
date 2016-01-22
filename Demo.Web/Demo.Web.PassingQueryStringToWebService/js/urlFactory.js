(function (urlFactory, window, undefined) {
	"use strict";

	urlFactory.formatURL = function(baseURL) {
		return dropLastSlash(baseURL) + window.location.search;
	}

	urlFactory.getDBQueryStringValue = function () {
		return getParameterByName("db");
	}

	urlFactory.getDBQueryString = function () {
		return "db=" + urlFactory.getDBQueryStringValue();
	}

	// http://stackoverflow.com/a/901144/4035
	// Modified a bit: ignores case sensitivity (refer to new RegEx flag)
	function getParameterByName(parameterName) {
		parameterName = parameterName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + parameterName + "=([^&#]*)", "i"),
			results = regex.exec(location.search);
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/gi, " "));
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
})(urlFactory = window.urlFactory || {}, window);