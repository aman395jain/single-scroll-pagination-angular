import { createAction, props } from "@ngrx/store";
import { tweetState } from "./store";

export const addNewTweets = createAction(
  "[tweets] ADD tweets",
  props<{ payload: { tweetData: tweetState[] } }>()
);
export const fetchTweets = createAction(
  "[tweets] fetch tweets",
  props<{ payload: { value: number } }>()
);
