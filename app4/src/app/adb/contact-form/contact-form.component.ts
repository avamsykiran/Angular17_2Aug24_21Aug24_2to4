import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  isNew:boolean;

  constructor(private cs:ContactService,private router:Router,private activatedRoute:ActivatedRoute){

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

    let cid = activatedRoute.snapshot.params["id"];

    if(cid){
      this.isNew=false;
      let c = this.cs.getById(Number(cid));
      this.contactForm.reset(c);
    }else{
      this.isNew=true;
    }
  }

  formSubmitted(){
    if(this.isNew){
      this.cs.add(this.contactForm.value);
    }else{
      this.cs.update(this.contactForm.value);
    }
    
    this.router.navigateByUrl("/contacts/list");
  }
}
