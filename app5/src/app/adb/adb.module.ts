import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const adbRoutes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"list"}, 
  {path:"list", component:ContactsListComponent}, 
  {path:"add", component:ContactFormComponent},
  {path:"edit/:id", component:ContactFormComponent}
];

@NgModule({
  declarations: [
    ContactFormComponent,
    ContactsListComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, RouterModule.forChild(adbRoutes)
  ]
})
export class AdbModule { }
