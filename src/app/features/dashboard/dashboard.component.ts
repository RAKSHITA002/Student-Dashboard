import { Component,  OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Student } from 'src/app/shared/models/interfaces/student';
import {Router} from '@angular/router'
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  student : Array<Student> =[];
  displayedColumns: string[] = ['name', 'email', 'id', 'actions'];
  constructor(private dataService : DataService, private router : Router){
  }

  ngOnInit() {
    this.getSomeData();
  }

  getSomeData(){
    this.dataService.getSomeData().subscribe(
      (data : Array<Student>)=>{
            this.student = data;
            console.log(this.student);
      },
      error =>{
        console.log('Error', error);
      }
    )
  }

  
  edit(id : number){
    this.router.navigate(['edit-student', id]);
    console.log(id);
  }

  deleteStudent(id: string) {
      this.dataService.deleteStudent(id)
      .subscribe(() => {
        this.student = this.student.filter(student => student.id !== id);
       });
  }

  viewAttendance(id : number){
    this.router.navigate(['view-attendance', id]);
  }
  
}
