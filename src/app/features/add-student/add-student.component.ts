import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {
  userData : FormGroup;

  constructor(private dataService : DataService){
    this.userData = new FormGroup({
        'name' : new FormControl('',[Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
        'email' : new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(3)])
    })
  }

  add(){
    console.log(this.userData.value);
    this.dataService.addStudent(this.userData.value)
    .subscribe(
      (response) => {
        console.log(response);
        alert("Student Added");
      },
      (error) => {
        console.log(error);
      }
    );
  }

}

