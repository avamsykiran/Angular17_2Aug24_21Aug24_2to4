import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api:string;

  constructor(private http:HttpClient) {
    this.api= environment.contactsApi;        
  }

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.api);
  }

  getById(id: number): Observable<Contact> {
    return this.http.get<Contact>(this.api + "/" +id);
  }

  add(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.api,contact);
  }

  update(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.api + "/" +contact.id,contact);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.api + "/" +id);
  }
}
