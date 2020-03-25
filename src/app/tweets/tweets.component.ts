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

@Component({
  selector: "app-tweets",
  templateUrl: "./tweets.html",
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.store.dispatch(
      newfetchTweets.fetchTweets({ payload: { value: this.pageNumber } })
    );
    // this.tweetData$.subscribe(data => console.log("data---->>>", data));
    this.pageNumber = this.pageNumber + 1;
  }

  pageEvents(event) {
    if (event.pageIndex > event.previousPageIndex) {
      this.pageNumber = event.pageIndex + 1;
      this.onScroll();
    }
  }
}
