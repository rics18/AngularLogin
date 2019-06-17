import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TweetDetails} from '../models/tweetDetails';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  idToken: string;
  errorMessage: string;
  public tweetDetails: TweetDetails[];

  idToken$: Observable<string>;

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.idToken = localStorage.getItem('idToken');
    this.getTweetDetails();
  }

  public getTweetDetails() {
    this.appService.getTweeterDetails(this.idToken)
      .subscribe((response: TweetDetails[]) => {
        this.tweetDetails = response;
        this.appService.tweetDetails = this.tweetDetails;
      }, (error: any) => {
        const err: Error = error.error;
        console.log('Tweeter Component', err);
        this.errorMessage = 'Invalid credentials';
      });
  }
  public getDetails(tweetId: string) {
    this.appService.tweetId = tweetId;
    this.router.navigate(['/tweeterdetails']);
  }

  public logout() {
    this.appService.logout();
  }

}
