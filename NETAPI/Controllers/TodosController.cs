using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

public class Todo {
   public int id { get; set; }
   public string title { get; set; }
   public bool complete { get; set; }
}

namespace NETAPI.Controllers
{
   [Route("api/[controller]")]
   public class TodosController : Controller
   {
       private List<Todo> _todos;
       public TodosController() {
       this._todos = new List<Todo>();
           this._todos.Add(new Todo(){ id=1, title="Prova .NET", complete=false } );
   }

       // GET api/todos
       [HttpGet]
       public IEnumerable<Todo> Get()
       {
           return this._todos;
       }

       // GET api/todos/5
       [HttpGet("{id}")]
       public ActionResult Get(int id)
       {
           var found = this._todos.Where(t => t.id==id).FirstOrDefault();
           if (found is null) return NotFound();
           else return Ok(found);
       }

       // POST api/todos
       [HttpPost]
       public void Post([FromBody]Todo value)
       {
           this._todos.Append(value);
       }

       // DELETE api/todos/5
       [HttpDelete("{id}")]
       public void Delete(int id)
       {
           var found = this._todos
               .Where(t => t.id != id).FirstOrDefault();
           if (!(found is null))
               this._todos.Remove(found);
       }
   }
}