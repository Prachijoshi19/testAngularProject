import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  studArr:Array<Student>=[]
 
constructor(private studentServiceObj:StudentService,private routerObject:Router){}
  ngOnInit() {
    this.showAllStudents()
  }
  showAllStudents()
  {
    this.studentServiceObj.getAllStudents().subscribe((data)=>{
      this.studArr=data
    })
  }

edit(id:string){
  this.routerObject.navigate(['EditStudent',id])
}
del(id:string)
{
  this.studentServiceObj.deleteStudent(id).subscribe((data)=>{
    this.showAllStudents()
  })
}
}
