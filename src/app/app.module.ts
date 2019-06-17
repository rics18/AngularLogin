import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppService} from './app.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TweetComponent } from './tweet/tweet.component';
import {RouterModule} from '@angular/router';
import {AppRouting} from './app.routing';
import { TweetsDetailsComponent } from './tweets-details/tweets-details.component';
import {ErrorInterceptor} from './error.interceptor';
import {AuthGuardService} from './auth.gaurd.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TweetComponent,
    TweetsDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRouting,
  ],
  providers: [
    AppService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
