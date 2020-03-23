import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, act } from "@ngrx/effects";
import * as tweetAction from "./tweet_action";
import { map, tap, switchMap, concatMap } from "rxjs/operators";
import { getMockData } from "../mock.data";

@Injectable()
export class TweetEffect {
  testData;
  fatchNewTweet = createEffect(() =>
    this.actions.pipe(
      ofType(tweetAction.fetchTweets),
      concatMap(action => getMockData({ page: action.payload.value })),
      map((data: any) => {
        // console.log("sgsfgsrsg", data);
        return tweetAction.addNewTweets({
          payload: { tweetData: [data] }
        });
      })
    )
  );

  constructor(private actions: Actions) {}
}
