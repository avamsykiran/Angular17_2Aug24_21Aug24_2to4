import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  contact:Contact;

  constructor(private cs:ContactService,private router:Router){
    this.contact={
      id:0,
      fullName:"",
      mobile:"",
      mailId:"",
      dob:""
    };
  }

  formSubmitted(){
    this.cs.add(this.contact);
    this.router.navigateByUrl("/contacts/list");
  }
}
