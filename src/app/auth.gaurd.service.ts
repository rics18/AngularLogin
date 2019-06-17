import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public router: Router) {}
  canActivate(): boolean {
    console.log('can Activate');
    if (!(localStorage.getItem('idToken'))) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
