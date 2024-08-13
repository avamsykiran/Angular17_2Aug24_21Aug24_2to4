import { Component } from '@angular/core';
import { HoverableDirective } from '../hoverable.directive';
import { FormsModule } from '@angular/forms';
import { TodayDirective } from '../today.directive';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [HoverableDirective,TodayDirective,FormsModule],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css'
})
export class DirectivesDemoComponent {

  color:string;
  myformat:string;

  constructor(){
    this.color="#f0000f";
    this.myformat="dd-MM-yyyy"
  }
}
