import { Routes } from '@angular/router';
import { NoSuchPathComponent } from './no-such-path/no-such-path.component';

export const routes: Routes = [
    {path:"",pathMatch:"full",redirectTo:"/contacts"}, 
    {path:"contacts", loadChildren: () => import('./adb/adb.module').then(m => m.AdbModule) }, 
    {path:"tasks", loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) }, 
    {path:"**",component:NoSuchPathComponent}
];
