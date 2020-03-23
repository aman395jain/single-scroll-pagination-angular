import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";

import * as newfetchTweets from "../tweets/ngrx/tweet_action";
import { tweetsDataSelector } from "./ngrx/tweet_selector";

@Component({
  selector: "app-tweets",
  templateUrl: "./tweets.html"
})
export class TweetsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  pageNumber: number = 1;
  tweetData$: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.tweetData$ = this.store.pipe(select(tweetsDataSelector));
  }

  onScroll() {
    console.log("page number is===", this.pageNumber);
    this.store.dispatch(
      newfetchTweets.fetchTweets({ payload: { value: this.pageNumber } })
    );
    this.pageNumber = this.pageNumber + 1;
  }

  testPage(event) {
    console.log("in the paginator---", event);
    if (event.pageIndex > event.previousPageIndex) {
      this.pageNumber = event.pageIndex + 1;
      this.onScroll();
    }
  }
}
