import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyLoginGuard implements CanActivate {
  constructor(private route: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url: any): boolean {
    if (!this.isLoggedIn()) {
      this.route.navigate(['/login']);
      return false;
    }
    else if (this.isLoggedIn()) {
      return true;
    }
    return false;
  }
  public isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLogged') == "true") {
      status = true;
    }
    else {
      status = false;
    }
    return status;
  }

}
