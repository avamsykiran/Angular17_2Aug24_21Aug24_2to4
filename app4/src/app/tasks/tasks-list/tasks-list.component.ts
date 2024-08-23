import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {

  tasks:Task[];

  constructor(private ts:TasksService){
    this.tasks=this.ts.getAll();
  }

  addTask = (task:Task) => {
    this.ts.add(task);
    this.tasks=this.ts.getAll();
  }

  delTask = (id:number) => {
    this.ts.deleteById(id);
    this.tasks=this.ts.getAll();
  }

  editTask = (id:number) => {
    let index = this.tasks.findIndex(t => t.id===id);
    if(index>-1){
      this.tasks[index].isEditing=true;
    }
  }

  unEditTask = (id:number) => {
    let index = this.tasks.findIndex(t => t.id===id);
    if(index>-1){
      this.tasks[index].isEditing=undefined;
    }
  }

  updateTask = (task:Task) => {
    task.isEditing=undefined;
    this.ts.update(task);
    this.tasks=this.ts.getAll();
  }

}
