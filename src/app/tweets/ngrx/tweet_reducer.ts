import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import * as tweetStore from "./store";
import * as tweetAction from "./tweet_action";

export const tweetAdapter = createEntityAdapter<tweetStore.tweetState>({
  selectId: newRes => {
    return newRes.currentPage;
  }
});

export const initialCoursesState = tweetAdapter.getInitialState();

export const tweetReducer = createReducer(
  initialCoursesState,
  on(tweetAction.addNewTweets, (state, action) => {
    console.log("in the state--->>", state);
    console.log("in the action--->>", action.payload.tweetData);
    console.log(tweetAdapter.addOne(action.payload.tweetData, state));
    return tweetAdapter.addOne(action.payload.tweetData, state);
  })
);

export const { selectAll } = tweetAdapter.getSelectors();
