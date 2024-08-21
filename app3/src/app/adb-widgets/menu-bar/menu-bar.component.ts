import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

  @Input()
  appTitle:string;

  @Input()
  menus!: {link:string,label:string}[];

  constructor(){
    this.appTitle="UnTitled";
  }
}
