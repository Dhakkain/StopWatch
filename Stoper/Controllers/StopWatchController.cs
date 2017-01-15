using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Stoper.Controllers
{
    public class StopWatchController : Controller
    {
        // GET: StopWatch
        public ActionResult Index()
        {
            return View();
        }
    }
}