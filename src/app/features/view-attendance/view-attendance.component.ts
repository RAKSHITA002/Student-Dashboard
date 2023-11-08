import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Attendance } from 'src/app/shared/models/interfaces/attendance';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.scss']
})
export class ViewAttendanceComponent {

  attendance : Attendance[] = [];
  studentId: string = '';
  studentAttendance: Attendance[] = [];

  constructor(private dataService : DataService, private route : ActivatedRoute){
    this.studentId = this.route.snapshot.paramMap.get('id')?.toString() || "";
    this.dataService.getAttendance().subscribe(data => {
    this.attendance = data;
    this.studentAttendance = this.attendance.filter(a => a.studentId === this.studentId);
    console.log(this.studentAttendance);
  });
  }
   
}
