import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  userName: string;

  ban: string[]; //banners
  bI: number; // banner index
  bW: number; //banner width
  bC: any; //banner classes

  constructor() {
    this.userName = "SomeBody";

    this.ban = [
      "images/w1.png",
      "images/w2.jpeg",
      "images/w3.jpeg",
      "images/w4.jpeg"
    ];

    this.bI = 0;

    this.bW = 300;

    this.bC = {centered:true, bordered:false};
  }

  changeIndex(): void {
    this.bI++;
    if(this.bI===this.ban.length){
      this.bI=0;
    }
  }
}
