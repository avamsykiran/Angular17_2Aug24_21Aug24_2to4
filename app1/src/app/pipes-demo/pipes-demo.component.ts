import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {

  num:number;
  str:string;
  dt:Date;

  constructor(){
    this.num=323.2342;
    this.str="hello! How Are you all!?";
    this.dt=new Date();
  }

}
