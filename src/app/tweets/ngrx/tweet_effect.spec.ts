import { TestBed } from "@angular/core/testing";
import { TweetEffect } from "./tweet_effect";
import { of, ReplaySubject } from "rxjs";
import { TweetService } from "src/app/shared/tweets_service";
import { provideMockActions } from "@ngrx/effects/testing";

import * as tweetAction from "./tweet_action";
import { mockTweet } from "./store";

describe("BookEffects", async () => {
  let tweetEffect: TweetEffect;
  let actions$: ReplaySubject<any> = new ReplaySubject(1);
  let mockTweetService: jasmine.SpyObj<TweetService>;

  beforeEach(() => {
    mockTweetService = jasmine.createSpyObj("TweetService", ["getTweets"]);
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        TweetEffect,
        provideMockActions(() => actions$),
        { provide: TweetService, useValue: mockTweetService }
      ]
    });
    tweetEffect = TestBed.get(TweetEffect);
  });

  it("should test for add tweets action dispatch", () => {
    mockTweetService.getTweets.and.returnValue(of(mockTweet));

    actions$.next(tweetAction.fetchTweets({ payload: { value: 1 } }));
    tweetEffect.fetchNewTweets$.subscribe(tweetData => {
      expect(tweetData.type).toEqual("[tweets] ADD tweets");
    });
  });
});
