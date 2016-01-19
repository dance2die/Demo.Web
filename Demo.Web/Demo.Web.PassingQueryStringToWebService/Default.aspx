<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Demo.Web.PassingQueryStringToWebService.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<title></title>
	<script src="Scripts/jquery-2.2.0.js"></script>
</head>
<body>
	<form id="form1" runat="server">
		<div>
		</div>
	</form>
	
	<script>
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
			}, error: function (error) {
				alert(error.statusText);
			}
		});

	</script>
</body>
</html>
