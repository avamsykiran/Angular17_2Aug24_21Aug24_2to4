import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const adbRoutes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"list"}, 
  {path:"list", component:ContactsListComponent}, 
  {path:"add", component:ContactFormComponent} 
];

@NgModule({
  declarations: [
    ContactFormComponent,
    ContactsListComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(adbRoutes)
  ]
})
export class AdbModule { }
