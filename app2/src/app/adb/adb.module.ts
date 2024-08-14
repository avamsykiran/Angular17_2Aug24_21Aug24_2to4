import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsListComponent } from '../contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [ContactsListComponent,ContactFormComponent],
  imports: [
    CommonModule
  ],
  exports:[ContactsListComponent,ContactFormComponent]
})
export class AdbModule { }
