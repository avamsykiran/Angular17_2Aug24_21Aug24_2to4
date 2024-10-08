import { Component } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {

  contacts:Contact[];

  constructor(private cs:ContactService){
    this.contacts = cs.getAll();
  }

  delBtnClick(id:number){
    this.cs.deleteById(id);
    this.contacts=this.cs.getAll();
  }
}
