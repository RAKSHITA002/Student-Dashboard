import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './features/add-student/add-student.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MarkAttendanceComponent } from './features/mark-attendance/mark-attendance.component';
import { HomeComponent } from './layout/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditStudentComponent } from './features/edit-student/edit-student.component';
import { ViewAttendanceComponent } from './features/view-attendance/view-attendance.component';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    DashboardComponent,
    MarkAttendanceComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    EditStudentComponent,
    ViewAttendanceComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    FormsModule, 
    ReactiveFormsModule,
    MatPaginatorModule 
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule ,
    HttpClientModule,
    MatTableModule,
    FormsModule, 
    ReactiveFormsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
