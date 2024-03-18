import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpClientObj:HttpClient) { }

  getAllStudents():Observable<Student[]>
  {
    return this.httpClientObj.get<Student[]>('http://localhost:4564/api/students')
  }  

  addNewStudent(obj:Student)
  {
    return this.httpClientObj.post('http://localhost:4564/api/students/',obj)
  }

  getStudent(id:string):Observable<Student>
  {
    return this.httpClientObj.get<Student>('http://localhost:4564/api/students/'+id)
  }

  updateStudent(id:string,obj:Student)
  {
    return this.httpClientObj.put('http://localhost:4564/api/students/'+id,obj)
  }
  deleteStudent(id:string)
  {
    return this.httpClientObj.delete('httP://localhost:4564/api/students/'+id)
  }

  checkLogin(email:string,pass:string)
  {
    if(email === 'prachi1912@gmail.com' && pass === 'prachi123')
    {
      localStorage.setItem('username',email)
      return true;
    }
    else
    {
      return false;
    }
  }
}
