import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TweetComponent} from './tweet/tweet.component';
import {TweetsDetailsComponent} from './tweets-details/tweets-details.component';
import {AuthGuardService} from './auth.gaurd.service';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'tweeter',
        component: TweetComponent,
        canActivate: [AuthGuardService]
    },
    {
      path: 'tweeterdetails',
      component: TweetsDetailsComponent,
      canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {
}
