import { Component ,OnInit,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from "../add-todo/add-todo.component";


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, FormsModule, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno:1,
        title:"this is title",
        desc:"this is description",
        active:true 
      },
      {
        sno:2,
        title:"this is 2nd title",
        desc:"this is 2nd description",
        active:true 
      },

    ];

  }

  ngOnInit(): void { 

}

 deleteTodo(todo: Todo){
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index,1);
  console.log(this.todos  )
}

 addTodo(todo: Todo){
  console.log(todo);
  this.todos.push(todo);
}

}

