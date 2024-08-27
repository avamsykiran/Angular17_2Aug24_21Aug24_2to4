import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrl: './task-row.component.css'
})
export class TaskRowComponent {

  @Input()
  task!:Task;

  @Input()
  delTask!:(id:number) => void;

  @Input()
  editTask!:(id:number) => void;

}
