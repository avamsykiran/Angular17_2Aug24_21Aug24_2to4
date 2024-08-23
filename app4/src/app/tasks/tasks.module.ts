import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskRowComponent } from './task-row/task-row.component';

const tasksRoutes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"list"}, 
  {path:"list", component:TasksListComponent}
];

@NgModule({
  declarations: [
    TasksListComponent,
    TaskFormComponent,
    TaskRowComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule.forChild(tasksRoutes)
  ]
})
export class TasksModule { }
