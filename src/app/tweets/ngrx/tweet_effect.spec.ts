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
  let actions$: ReplaySubject<any> = new ReplaySubject(1);
  let tweetService: TweetService;
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

    const mockTweetServiceData = mockTweetService.getTweets.and.returnValue(
      of(mockTweets)
    );

    actions$.next(tweetAction.fetchTweets({ payload: { value: 1 } }));
    tweetEffect.fetchNewTweets$.subscribe(tweetData => {
      expect(tweetData.type).toEqual("[tweets] ADD tweets");
    });
  });
});
