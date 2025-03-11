using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using UI.Models;

namespace UI.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Testing()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    [Route("/GetSome")]
    public IActionResult GetSome(){
        return Ok(new List<Person>{
            new Person("Ivan","Zvezdev",33),
            new Person("Petar","Lozev",13),
            new Person("Gencho","Strqhov",18),
            new Person("Penka","Toteva",28),
        });
    }


    public class Person{
        public Person(string fname,string lname, int age)
        {
            FirstName = fname;
            LastName = lname;
            Age = age;
        }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int Age { get; set; }
    }

}
