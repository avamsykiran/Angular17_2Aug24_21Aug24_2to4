import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  @Input()
  task!:Task;

  @Input()
  saveTask!:(task:Task) => void;

  @Input()
  unEditTask!:(id:number) => void;

  idFC:FormControl;
  jobFC:FormControl;
  priorityFC:FormControl;
  statusFC:FormControl;

  taskForm:FormGroup;

  constructor(){
    this.idFC=new FormControl(0);
    this.jobFC=new FormControl("",[Validators.required]);
    this.statusFC=new FormControl("",[Validators.required]);
    this.priorityFC=new FormControl("",[Validators.required]);

    this.taskForm = new FormGroup({
      id:this.idFC,job:this.jobFC,status:this.statusFC,priority:this.priorityFC
    })
  }

  ngOnChanges(){
    if(this.task){
      this.taskForm.reset(this.task);
    }
  }

  formSubmitted(){
    this.saveTask(this.taskForm.value);
    if(!this.task){
      this.taskForm.reset({id:0,job:"",status:"",priority:""});    
    }
  }

  cancelBtnClick(){
    if(!this.task){
      this.taskForm.reset({id:0,job:"",status:"",priority:""});    
    }else{
      this.unEditTask(this.task.id);
    }
  }
}
