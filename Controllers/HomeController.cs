using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DurandalMVC.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        // (this is for the SPA landing page) 
        public ActionResult Index()
        {
            return View(); 
        }

        //
        // GET: /Home/Shell
        // (this will serve the initial shell for the SPA)
        public ActionResult Shell()
        {
            return View();
        }
    }
}
