import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AddStudentComponent } from './features/add-student/add-student.component';
import { MarkAttendanceComponent } from './features/mark-attendance/mark-attendance.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { EditStudentComponent } from './features/edit-student/edit-student.component';
import { ViewAttendanceComponent } from './features/view-attendance/view-attendance.component';

const routes: Routes = [
  {path : "",
   component : HomeComponent
  },
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
    path : "add-student",
    component : AddStudentComponent
  },
  {
    path : "mark-attendance",
    component : MarkAttendanceComponent
  },
  {
    path : "edit-student/:id",
    component : EditStudentComponent
  },
  {
    path : "view-attendance/:id",
    component : ViewAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
