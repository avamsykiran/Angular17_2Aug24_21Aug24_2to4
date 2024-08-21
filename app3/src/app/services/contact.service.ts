import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[];
  private nextId: number;

  constructor() {
    this.contacts = [
      { id: 1, fullName: "Vamsy Kiran", mobile: "9052224753", mailId: "vamsy@gmail.com", dob: "1985-06-11" },
      { id: 2, fullName: "KGN Murthy", mobile: "9052224735", mailId: "murthy@gmail.com", dob: "1985-01-11" },
      { id: 3, fullName: "Suresh P", mobile: "9052224722", mailId: "suresh@gmail.com", dob: "1985-02-21" }
    ];
    this.nextId = 4;
  }

  getAll(): Contact[] {
    return [...this.contacts];
  }

  getById(id: number): Contact | undefined {
    return this.contacts.find(c => c.id === id);
  }

  add(contact: Contact): Contact {
    contact.id = this.nextId++;
    this.contacts.push(contact);
    return contact;
  }

  update(contact: Contact): Contact {
    let index = this.contacts.findIndex(c => c.id === contact.id);
    if (index > -1) {
      this.contacts[index] = contact;
    }
    return contact;
  }

  deleteById(id: number): void {
    let index = this.contacts.findIndex(c => c.id === id);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }
}
