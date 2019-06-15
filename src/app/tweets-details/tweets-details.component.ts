import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {TweetDetails} from '../tweetDetails';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tweets-details',
  templateUrl: './tweets-details.component.html',
  styleUrls: ['./tweets-details.component.css']
})
export class TweetsDetailsComponent implements OnInit {
  tweetDetails: TweetDetails;
  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    const tweetId = this.loginService.tweetId;
    const tweetDetails = this.loginService.tweetDetails;

    this.tweetDetails = tweetDetails.find(x => x.user.id === tweetId);
    console.log(tweetDetails.find(x => x.user.id === tweetId));
    console.log(this.tweetDetails);
  }

  public goBack() {
    console.log('go back');
    this.router.navigate(['/tweeter']);
  }

  public logout() {
    this.loginService.logout();
  }

}
