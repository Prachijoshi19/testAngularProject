import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  constructor(private studentServiceObj:StudentService,
    private activeRouterObject:ActivatedRoute,
    private routerObject:Router){}
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
  ngOnInit() {
    this.activeRouterObject.params.subscribe((parameter)=>{
        this.studentServiceObj.getStudent(parameter['id']).subscribe((rec)=>{
          this.regObj=rec          
        })
    })
  }

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
        this.studentServiceObj.updateStudent(this.regObj.id,obj).subscribe((data)=>{
            this.routerObject.navigate(['Home'])
         })
  }
  
}
