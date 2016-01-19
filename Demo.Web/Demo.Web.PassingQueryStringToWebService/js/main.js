(function() {
	"use strict";

	var url = "Services/ContextWebService.asmx/GetContext" + window.location.search;

	$.ajax({
		type: "GET",
		url: url,
		contentType: "application/json; charset=utf-8",
		data: "",
		dataType: "json",
		success: function (data) {
			var result = $.parseJSON(data.d);
			console.log(result);
			alertify.log(result.login);
			alertify.log(result.db);
		}, error: function (error) {
			alert(error.statusText);
		}
	});
})();