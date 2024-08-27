import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {

  contacts!:Contact[];
  errMsg!:string;
  shallWait!:boolean;

  constructor(private cs:ContactService){
  }

  ngOnInit(){
    this.loadData();
  }

  loadData(){
    this.shallWait=true;
    this.cs.getAll().subscribe({
      next: data => this.contacts=data,
      error: err => { console.error(err); this.errMsg="Sorry! Failed to retrive data! Please retry later!";},
      complete: () => this.shallWait=false
    });
  }

  delBtnClick(id:number){
    this.shallWait=true;
    this.cs.deleteById(id).subscribe({
      next: () => this.loadData() ,
      error: err => { console.error(err); this.errMsg="Sorry! Failed to delete data! Please retry later!";},
      complete: () => this.shallWait=false
    });
  }
}
