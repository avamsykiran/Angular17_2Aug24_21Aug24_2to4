import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdbWidgetsModule } from './adb-widgets/adb-widgets.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ AdbWidgetsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title:string;

  menus:{link:string,label:string}[];

  constructor(){
    this.title="Address Book 1.0";
    
    this.menus=[
      {link:"list",label:"Contacts List"},
      {link:"add",label:"New Contact"}
    ];
  }
}
