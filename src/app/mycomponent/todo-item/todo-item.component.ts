import { Component , EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from '../../Todo';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent implements OnInit {
  
  @Input()
  todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }
  
  
  ngOnInit(): void {
    
  }

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("On click triggered");
  }

}
