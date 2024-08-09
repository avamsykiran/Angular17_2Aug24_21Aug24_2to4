import { Component } from '@angular/core';
import { HoverableDirective } from '../hoverable.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [HoverableDirective,FormsModule],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css'
})
export class DirectivesDemoComponent {

  color:string;

  constructor(){
    this.color="#f0000f";
  }
}
