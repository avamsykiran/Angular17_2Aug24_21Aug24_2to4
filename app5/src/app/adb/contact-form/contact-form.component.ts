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

  contactForm: FormGroup;

  idFC: FormControl;
  fullNameFC: FormControl;
  mobileFC: FormControl;
  mailIdFC: FormControl;
  dobFC: FormControl;

  isNew: boolean;

  errMsg!: string;
  shallWait!: boolean;

  constructor(private cs: ContactService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.idFC = new FormControl(0);
    this.fullNameFC = new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]);
    this.mobileFC = new FormControl("", [Validators.required, Validators.pattern("[1-9][0-9]{9}")]);
    this.mailIdFC = new FormControl("", [Validators.required, Validators.email]);
    this.dobFC = new FormControl("", [Validators.required]);

    this.contactForm = new FormGroup({
      id: this.idFC,
      fullName: this.fullNameFC,
      mobile: this.mobileFC,
      mailId: this.mailIdFC,
      dob: this.dobFC
    });

    this.isNew = true;
  }

  ngOnInit() {
    let cid = this.activatedRoute.snapshot.params["id"];

    if (cid) {
      this.isNew = false;
      this.shallWait = true;
      this.cs.getById(Number(cid)).subscribe({
        next: data => this.contactForm.reset(data),
        error: err => { this.errMsg = "Something went wrong! Please retry later!"; console.error(err); },
        complete: () => this.shallWait = false
      })
    }
  }

  formSubmitted() {
    let ob = null;

    if (this.isNew) {
      ob = this.cs.add(this.contactForm.value);
    } else {
      ob = this.cs.update(this.contactForm.value);
    }

    this.shallWait = true;
    ob.subscribe({
      next: data => this.router.navigateByUrl("/contacts/list"),
      error: err => { this.errMsg = "Something went wrong! Please retry later!"; console.error(err); },
      complete: () => this.shallWait = false
    })
  }
}
