import { AuthService, UserRoles } from './../auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (this.auth.getRole() !== UserRoles.admin) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
