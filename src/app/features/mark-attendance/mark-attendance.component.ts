import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { HttpClient } from '@angular/common/http';
import { Attendance } from 'src/app/shared/models/interfaces/attendance';

@Component({
  selector: 'app-mark-attendance',
  templateUrl: './mark-attendance.component.html',
  styleUrls: ['./mark-attendance.component.scss']
})
export class MarkAttendanceComponent{

  attendance : Attendance = {id : "", studentId : "",date : "", status : ""};
  constructor(private dataService : DataService, private http : HttpClient){}

  add(event : Event){
    event.preventDefault();
       const attendance : Attendance = {
       id : this.attendance.id,
       studentId : this.attendance.studentId,
       date : this.attendance.date,
       status : this.attendance.status
    }
    this.postData(attendance);
  }

  postData(attendance: Attendance) {
    this.dataService.addAttendance(attendance).subscribe(
      (data: Attendance) => {
        console.log(data);
        alert("Attendance Marked")
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
