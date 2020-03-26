import { TestBed, fakeAsync, tick, async } from "@angular/core/testing";
import { TweetEffect } from "./tweet_effect";
import { EffectsMetadata, getEffectsMetadata } from "@ngrx/effects";
import { Observable, of, ReplaySubject } from "rxjs";
import { TweetService } from "src/app/shared/tweets_service";
import { DebugElement } from "@angular/core";
import { provideMockActions } from "@ngrx/effects/testing";

import * as tweetAction from "./tweet_action";

describe("BookEffects", async () => {
  let tweetEffect: TweetEffect;
  let actions: Observable<any>;
  let tweetService: TweetService;
  let mockTweetService: jasmine.SpyObj<TweetService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        TweetEffect,
        provideMockActions(() => actions),
        { provide: TweetService, useValue: mockTweetService }
      ]
    });
    tweetEffect = TestBed.get(TweetEffect);
  });

  fit("test", fakeAsync(() => {
    let mockTweets = {
      currentPage: 1,
      hasMore: true,
      perPage: 10,
      total: 30,
      lastPage: 3,
      data: [
        {
          id: 67671,
          username: "Raj Sharma",
          text: "Alias et nulla aliquam nisi officia fuga sequi."
        }
      ]
    };
    // tweetServiceSpy = spyOn(tweetService, "getTweets").and.returnValue(
    //   mockTweets
    // );

    const actions$ = new ReplaySubject(1);
    actions$.next(tweetAction.fetchTweets({ payload: { value: 1 } }));
    tweetEffect.fetchNewTweets$.subscribe(result => {
      console.log("result---", result);
    });
  }));
});
