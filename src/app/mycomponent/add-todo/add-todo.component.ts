import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  title: string | undefined;
  desc: string | undefined;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  
  constructor() {
   
  }
  ngOnInit(): void {
  }
 


  onSubmit() {

    console.log('Form submitted');
    console.log('Title:', this.title);
    console.log('Description:', this.desc);

    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);

  }


}
