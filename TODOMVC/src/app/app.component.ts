import {Component} from '@angular/core';
import {Todo} from './todo';
import {APIService} from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [APIService]
})
export class AppComponent {

  newTodo: Todo = new Todo();

  constructor(public todoDataService: APIService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  delTodo(id: number) {
    this.todoDataService.deleteTodoById(id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}