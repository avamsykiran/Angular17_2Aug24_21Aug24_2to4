import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {

  tasks!:Task[];
  errMsg!:string;
  shallWait!:boolean;

  constructor(private ts:TasksService){
  }

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.shallWait=true;
    this.ts.getAll().subscribe({
      next: data => this.tasks=data,
      error: err => { console.error(err); this.errMsg="Something went wrong! Please retry later!"; },
      complete: () => this.shallWait=false
    })
  }

  addTask = (task:Task) => {
    this.shallWait=true;
    this.ts.add(task).subscribe({
      next: data => this.loadData(),
      error: err => { console.error(err); this.errMsg="Something went wrong! Please retry later!"; },
      complete: () => this.shallWait=false
    })
  }

  delTask = (id:number) => {
    this.shallWait=true;
    this.ts.deleteById(id).subscribe({
      next: () => this.loadData(),
      error: err => { console.error(err); this.errMsg="Something went wrong! Please retry later!"; },
      complete: () => this.shallWait=false
    })
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
    this.shallWait=true;
    this.ts.update(task).subscribe({
      next: data => this.loadData(),
      error: err => { console.error(err); this.errMsg="Something went wrong! Please retry later!"; },
      complete: () => this.shallWait=false
    })
  }
}
