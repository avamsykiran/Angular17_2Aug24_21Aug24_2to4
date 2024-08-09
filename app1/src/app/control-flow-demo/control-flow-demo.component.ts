import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow-demo.component.html',
  styleUrl: './control-flow-demo.component.css'
})
export class ControlFlowDemoComponent {

  friends:string[];
  frd!:string;

  constructor(){
    this.friends = ["Vamsy","Murthy","Suresh","Ramesh"];
  }

  addFriend():void{
    if(this.frd && this.frd.length>0){
      this.friends.push(this.frd);
      this.frd="";
    }
  }

  remove(index:number):void{
    if(index>-1 && index<this.friends.length){
      this.friends.splice(index,1);
    }
  }
}
