import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { authGuard } from './auth.guard';

const routes: Routes = [{path:'Login', component:LoginComponent},
                        {path:'Logout',canActivate:[authGuard],component:LogoutComponent},
                        {path:'Home',canActivate:[authGuard],component:HomeComponent},
                        {path:'NewStudent',canActivate:[authGuard],component:AddStudentComponent},
                        {path:'ViewStudent',canActivate:[authGuard],component:ListStudentComponent},
                        {path:'EditStudent/:id',canActivate:[authGuard],component:EditStudentComponent},
                        {path:'',redirectTo:'Login',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
