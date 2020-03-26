import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as tweetAction from "./tweet_action";
import { map, switchMap, concatMap, catchError } from "rxjs/operators";
import { TweetService } from "src/app/shared/tweets_service";

@Injectable()
export class TweetEffect {
  getNewData(pageNumber, res) {
    const tweetData = {
      data: res,
      currentPage: pageNumber,
      hasMore: true,
      perPage: 10,
      total: 55,
      lastPage: 6
    };
    return tweetData;
  }

  fetchNewTweets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tweetAction.fetchTweets),
      concatMap(data =>
        this.tweetService.getTweets(data.payload.value).pipe(
          map(res =>
            tweetAction.addNewTweets({
              payload: { tweetData: this.getNewData(data.payload.value, res) }
            })
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private tweetService: TweetService) {}
}
