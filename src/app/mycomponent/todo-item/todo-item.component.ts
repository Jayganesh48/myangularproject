import { Component , EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent implements OnInit {
  
  @Input()  todo: Todo = new Todo;
  @Input()  i: number = 0;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }
  
  
  ngOnInit(): void {
    
  }

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("On click triggered");
  }

  onCheckboxClick () {
    
    this.todoCheckbox.emit(this.todo);

  }
}
