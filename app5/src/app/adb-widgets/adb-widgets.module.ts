import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuBarComponent,MsgBoxComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[MenuBarComponent,MsgBoxComponent]
})
export class AdbWidgetsModule { }
