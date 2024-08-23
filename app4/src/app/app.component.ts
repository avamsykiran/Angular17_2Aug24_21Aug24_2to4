import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdbWidgetsModule } from './adb-widgets/adb-widgets.module';
import { FormsModule } from '@angular/forms';
import { AdbModule } from './adb/adb.module';

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
    this.title="Personal Manager 1.0";
    
    this.menus=[
      {link:"contacts/list",label:"Contacts List"},
      {link:"contacts/add",label:"New Contact"},
      {link:"tasks/list",label:"Tasks List"}
    ];
  }
}
