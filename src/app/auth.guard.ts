import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn:'root'
})
export class authGuard implements CanActivate {
  canActivate(    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
   
      if(localStorage.getItem('username')!=='null')
        return true;
      else
        return false
    }
 
}
