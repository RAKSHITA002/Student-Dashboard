import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/shared/models/interfaces/student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  userData: FormGroup;
  studentId: string = '';

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.userData = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(3),
        Validators.email
      ]),
    });
  }

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('id')?.toString() || '';

    this.dataService.getStudentById(this.studentId).subscribe(data => {
      this.userData.setValue({
        name: data.name,
        email: data.email
      });
    });
  }

  edit() {
    const studentData: Student = {
      id: this.studentId,
      name: this.userData.value.name,
      email: this.userData.value.email
    };
    this.dataService.editStudent(studentData).subscribe(
      () => {
        console.log('Student edited successfully');
        alert('Student edited successfully');
      },
      error => {
        console.log('Edit failed', error);
        alert('Edit failed');
      }
    );
  }
}