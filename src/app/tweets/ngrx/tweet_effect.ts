import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, act } from "@ngrx/effects";
import * as tweetAction from "./tweet_action";
import { map, switchMap, concatMap, withLatestFrom } from "rxjs/operators";
import { TweetService } from "src/app/shared/tweets_service";

@Injectable()
export class TweetEffect {
  fatchNewTweet = createEffect(() =>
    this.actions.pipe(
      ofType(tweetAction.fetchTweets),
      concatMap(action => {
        return this.tweetService.getTweets(action.payload.value);
        // return getMockData({ page: action.payload.value }); //works
      }),
      map((data: any) => {
        console.log("data---", data);
        return tweetAction.addNewTweets({
          payload: { tweetData: [data] }
        });
      })
    )
  );

  constructor(private actions: Actions, private tweetService: TweetService) {}
}
