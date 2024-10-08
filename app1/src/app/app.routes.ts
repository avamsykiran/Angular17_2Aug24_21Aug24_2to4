import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ControlFlowDemoComponent } from './control-flow-demo/control-flow-demo.component';
import { NoSuchPathComponent } from './no-such-path/no-such-path.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

export const routes: Routes = [
    {path:"",pathMatch:'full',redirectTo:'/wel'},
    {path:"wel",component:WelcomeComponent},
    {path:"cfd",component:ControlFlowDemoComponent},
    {path:"ddc",component:DirectivesDemoComponent},
    {path:"pdc",component:PipesDemoComponent},
    {path:"**",component:NoSuchPathComponent}
];
