﻿(function() {
	"use strict";

	//var serviceURL = urlFactory.formatURL("Services/ContextWebService.asmx/GetContext/");
	var serviceURL = "Services/ContextWebService.asmx/GetContext";

	 $.ajax({
		type: "GET",
		url: serviceURL,
		contentType: "application/json; charset=utf-8",
		data: "",
		dataType: "json",
		success: function (data) {
			var result = $.parseJSON(data.d);
			console.log(result);
			alertify.log(result.login);
			alertify.log(result.db);
			alertify.log(result.c);
		}, error: function (error) {
			alert(error.statusText);
		}
	});
})();