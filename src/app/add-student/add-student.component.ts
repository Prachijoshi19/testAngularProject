import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  regObj:Student={
    id: '',
    rollno: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    contactNo: '',
    education: '',
    course: ''
  }

constructor(private studentServiceObj:StudentService,private routerObject:Router){}
save(){
  let obj:Student={
    id: this.regObj.id,
    rollno: this.regObj.rollno,
    firstName: this.regObj.firstName,
    lastName: this.regObj.lastName,
    address: this.regObj.address,
    email: this.regObj.email,
    contactNo: this.regObj.contactNo,
    education: this.regObj.education,
    course: this.regObj.course
  }
      this.studentServiceObj.addNewStudent(obj).subscribe((data)=>{
          this.routerObject.navigate(['Home'])
      })
  this.regObj={
    id: '',
    rollno: '',
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    contactNo: '',
    education: '',
    course: ''
  }
}

}
