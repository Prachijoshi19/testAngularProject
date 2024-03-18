import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private routerObject:Router,private studentServiceObj:StudentService){}
  login(username:string,pass:string)
  {
    if(this.studentServiceObj.checkLogin(username,pass))
    {
      alert('Login successful!!!')
      this.routerObject.navigate(['Home'])
    }
    else
    {
      alert('Login fail!!!')
      this.routerObject.navigate(['Login'])
    }
      
  }
}
