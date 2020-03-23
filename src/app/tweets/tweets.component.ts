import { TweetsService } from "./state/tweets.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Tweet } from "./state/tweet.model";
import { TweetsQuery } from "./state/tweets.query";
import { Store, select } from "@ngrx/store";

import * as newfetchTweets from "../tweets/ngrx/tweet_action";
import { tweetsDataSelector } from "./ngrx/tweet_selector";

@Component({
  selector: "app-tweets",
  templateUrl: "./tweets.html"
})
export class TweetsComponent implements OnInit {
  tweets$: Observable<Tweet[]>;
  isLoading$: Observable<boolean>;
  pageNumber: number = 1;
  tweetData$: Observable<any>;

  constructor(
    private tweetsQuery: TweetsQuery,
    private tweetsService: TweetsService,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.fetchTweets();
    this.tweets$ = this.tweetsQuery.selectAll();
    this.tweetData$ = this.store.pipe(select(tweetsDataSelector));
    // this.tweetData$.subscribe(data => {
    //   if (data.length) {
    //     this.displayData = data;
    //   }
    // });
    this.isLoading$ = this.tweetsQuery.selectLoading();
  }

  onScroll() {
    this.fetchTweets();
    this.store.dispatch(
      newfetchTweets.fetchTweets({ payload: { value: this.pageNumber } })
    );
    this.pageNumber = this.pageNumber + 1;
  }

  private fetchTweets() {
    if (this.tweetsQuery.getHasMore()) {
      this.tweetsService.get(this.tweetsQuery.getPage());
    }
  }
}
