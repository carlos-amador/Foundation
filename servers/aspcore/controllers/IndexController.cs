using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Hosting;

namespace aspcore.controllers
{
    public class IndexController : Controller
    {
        private readonly IHostingEnvironment _env;

        public IndexController(IHostingEnvironment env)
        {
            _env = env;
        }

        public IActionResult Index()
        {
            var webRoot = _env.WebRootPath;
            var path = System.IO.Path.Combine(webRoot, "index.html");
            return File(virtualPath: path, contentType: "text/html");
        }

        // 
        // GET: /HelloWorld/Welcome/ 

        public string Welcome()
        {
            return "This is the Welcome action method...";
        }
    }
}