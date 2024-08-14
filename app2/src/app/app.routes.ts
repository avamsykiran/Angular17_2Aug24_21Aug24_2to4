import { Routes } from '@angular/router';
import { NoSuchPathComponent } from './no-such-path/no-such-path.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './adb/contact-form/contact-form.component';

export const routes: Routes = [
    {path:"",pathMatch:"full",redirectTo:"/list"}, // http://localhost:8888 , http://localhost:8888/
    {path:"list",component:ContactsListComponent}, // http://localhost:8888/list
    {path:"add",component:ContactFormComponent}, // http://localhost:8888/add
    {path:"**",component:NoSuchPathComponent}
];
