import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contactForm:FormGroup;

  idFC:FormControl;
  fullNameFC:FormControl;
  mobileFC:FormControl;
  mailIdFC:FormControl;
  dobFC:FormControl;

  constructor(private cs:ContactService,private router:Router){

    this.idFC = new FormControl(0);
    this.fullNameFC = new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(30)]);
    this.mobileFC = new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]{9}")]);
    this.mailIdFC = new FormControl("",[Validators.required,Validators.email]);
    this.dobFC = new FormControl("",[Validators.required]);
    
    this.contactForm = new FormGroup({
      id:this.idFC,
      fullName:this.fullNameFC,
      mobile:this.mobileFC,
      mailId:this.mailIdFC,
      dob:this.dobFC
    });
  }

  formSubmitted(){
    this.cs.add(this.contactForm.value);
    this.router.navigateByUrl("/contacts/list");
  }
}
