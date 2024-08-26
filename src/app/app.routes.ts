import { Routes } from '@angular/router';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { AboutComponent } from './mycomponent/about/about.component';

export const routes: Routes = [


    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent },
];
