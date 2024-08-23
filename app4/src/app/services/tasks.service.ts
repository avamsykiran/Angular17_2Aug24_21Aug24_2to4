import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Task[];
  private nextId: number;

  constructor() {
    this.tasks = [
      { id: 1, job:"ReFuel Car",priority:"URGENT",status:"DONE"},
      { id: 2, job:"Buy Marrage Day Gift",priority:"URGENT",status:"PENDING"},
      { id: 3, job:"Pay Term 2 School Fee ",priority:"NORMAL",status:"PENDING"},
      { id: 4, job:"Clear Electricity Bill",priority:"NORMAL",status:"PENDING"}
    ];
    this.nextId = 5;
  }

  getAll(): Task[] {
    return [...this.tasks];
  }

  getById(id: number): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

  add(task:Task): Task {
    task.id = this.nextId++;
    this.tasks.push(task);
    return task;
  }

  update(task: Task): Task {
    let index = this.tasks.findIndex(t => t.id === task.id);
    if (index > -1) {
      this.tasks[index] = task;
    }
    return task;
  }

  deleteById(id: number): void {
    let index = this.tasks.findIndex(t => t.id === id);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }
}
