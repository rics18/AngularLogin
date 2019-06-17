import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {TweetDetails} from '../models/tweetDetails';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tweets-details',
  templateUrl: './tweets-details.component.html',
  styleUrls: ['./tweets-details.component.css']
})
export class TweetsDetailsComponent implements OnInit {
  tweetDetails: TweetDetails;
  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    const tweetId = this.appService.tweetId;
    const tweetDetails = this.appService.tweetDetails;

    this.tweetDetails = tweetDetails.find(x => x.user.id === tweetId);
    console.log(tweetDetails.find(x => x.user.id === tweetId));
    console.log(this.tweetDetails);
  }

  public goBack() {
    console.log('go back');
    this.router.navigate(['/tweeter']);
  }

  public logout() {
    this.appService.logout();
  }

}
