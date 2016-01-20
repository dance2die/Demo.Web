using System;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using Newtonsoft.Json;

namespace Demo.Web.PassingQueryStringToWebService.Services
{
	[WebService(Namespace = "http://tempuri.org/")]
	[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
	[System.ComponentModel.ToolboxItem(false)]
	// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
	[ScriptService]
	public class ContextWebService : WebService
	{

		[WebMethod]
		[ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = true)]
		public string GetContext()
		{
			var login = new
			{
				login = GetLogin(HttpContext.Current),
				db = GetDbFromQueryString(HttpContext.Current),
				c = HttpContext.Current.Request.QueryString["c"]
			};
			return JsonConvert.SerializeObject(login);
		}

		private string GetDbFromQueryString(HttpContext httpContext)
		{
			return httpContext.Request.QueryString["db"];
		}

		private string GetLogin(HttpContext httpContext)
		{
			if (httpContext.Request.ServerVariables.Get("AUTH_USER") == null)
				throw new Exception("Login name could not be retrieved");

			string login = httpContext.Request.ServerVariables.Get("AUTH_USER");
			// drop domain from login name
			return login.Substring(login.LastIndexOf("\\", StringComparison.Ordinal) + 1);
			//return login;
		}
	}
}
