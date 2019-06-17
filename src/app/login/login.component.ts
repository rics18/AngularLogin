import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public errorMessage: string;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
  }

  public login() {
    this.appService.login(this.email, this.password)
      .subscribe((response: any) => {
        console.log('Login Component', response);
        var id = response.idToken;
        this.appService.tokenId = id;
        localStorage.setItem('idToken', id);
        this.router.navigate(['/tweeter']);
      }, (error: any) => {
        const err: Error = error.error;
        console.log('Login Component', err);
        this.errorMessage = 'Invalid login credentials';
      });
  }

}
