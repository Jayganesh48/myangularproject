import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./mycomponent/todos/todos.component";
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './mycomponent/add-todo/add-todo.component';
import { TodoItemComponent } from './mycomponent/todo-item/todo-item.component';

 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent,TodoItemComponent,AddTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  
 
}

