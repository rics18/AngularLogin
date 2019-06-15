import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
// import {IAppState} from '../store/state/app.state';
// import {GetUserId, SetUserId} from '../store/action/userId.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public errorMessage: string;
  public user: User;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  public login() {
    this.loginService.login(this.email, this.password)
      .subscribe((response: any) => {
        console.log('Login Component', response);
        var id = response.idToken;
        this.loginService.tokenId = id;
        localStorage.setItem('idToken', id);
        // this._store.dispatch(new GetUserId(id));
        // this.store.dispatch(new SetUserId(id));
        this.router.navigate(['/tweeter']);
      }, (error: any) => {
        const err: Error = error.error;
        console.log('Login Component', err);
        this.errorMessage = 'Invalid login credentials';
      });
  }

}
