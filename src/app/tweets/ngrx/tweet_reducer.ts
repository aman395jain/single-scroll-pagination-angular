import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import * as tweetStore from "./store";
import * as tweetAction from "./tweet_action";

export const tweetAdapter = createEntityAdapter<tweetStore.tweetState>({
  selectId: newRes => {
    return newRes.currentPage;
  }
});

export const initialTweetState = tweetAdapter.getInitialState();

export const tweetReducer = createReducer(
  initialTweetState,
  on(tweetAction.addNewTweets, (state, action) => {
    return tweetAdapter.addOne(action.payload.tweetData, state);
  })
);

export const { selectAll } = tweetAdapter.getSelectors();
