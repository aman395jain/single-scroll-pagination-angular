import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy
} from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";

import * as newfetchTweets from "../tweets/ngrx/tweet_action";
import { tweetsDataSelector } from "./ngrx/tweet_selector";
import { AppState } from "./ngrx/store";

@Component({
  selector: "app-tweets",
  templateUrl: "./tweets.html"
})
export class TweetsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  pageNumber: number = 1;
  tweetData$: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.tweetData$ = this.store.pipe(select(tweetsDataSelector));
  }

  onScroll(flag) {
    this.store.dispatch(
      newfetchTweets.fetchTweets({ payload: { value: this.pageNumber } })
    );
    if (flag && this.pageNumber < 6) {
      this.pageNumber = this.pageNumber + 1;
    }
  }

  pageEvents(event) {
    if (event.pageIndex > event.previousPageIndex) {
      this.pageNumber = event.pageIndex + 1;
      this.onScroll(false);
    }
  }
}
