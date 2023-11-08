import { Injectable } from '@angular/core';
import { UrlConstants } from '../constants/url.constant';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Student } from '../models/interfaces/student';
import { Observable } from 'rxjs';
import { Attendance } from '../models/interfaces/attendance';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url : string ="";
  constructor(private http : HttpClient) {
    this.url = UrlConstants.baseURL;
   }
 
//students
  getSomeData(): Observable<Array<Student>>{
    return this.http.get<Array<Student>>(`${this.url}/students`);   
  }
 
  getStudentById(id : string): Observable<Student>{
    return this.http.get<Student>(`${this.url}/students/${id}`);   
  }

  deleteStudent(id: string): Observable<{}> {
    return this.http.delete(`${this.url}/students/${id}`);
  }

  addStudent(newStudent : Student) : Observable<Student>{
     return this.http.post<Student>(`${this.url}/students`,newStudent);
  }

  editStudent(editedStudent : Student): Observable<Student>{
    return this.http.put<Student>(`${this.url}/students/${editedStudent.id}`, editedStudent)      
  }

  //attendance

  getAttendance() : Observable<Array<Attendance>>{
    return this.http.get<Array<Attendance>>(`${this.url}/attendance`);
  }

  addAttendance(data : Attendance) : Observable<Attendance>{
    return this.http.post<Attendance>(`${this.url}/attendance`, data);
  }
 
}
