import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import { SidebarComponent } from './components/sidebar/sidebar.component'; */
/* import { TopbarComponent } from './components/topbar/topbar.component'; */
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
   /*  SidebarComponent, */
   /*  TopbarComponent */
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule ,
    MatToolbarModule,
    MatIconModule
  ],

  exports : [
    CommonModule,
    MatSidenavModule,
    MatListModule 
  ]
})
export class SharedModule { }
