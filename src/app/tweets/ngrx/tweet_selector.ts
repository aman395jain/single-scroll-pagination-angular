import { createFeatureSelector, createSelector } from "@ngrx/store";

import { tweetState } from "./store";

const tweetsData = createFeatureSelector<tweetState>("tweets");

export const tweetsDataSelector = createSelector(tweetsData, test => {
  return test;
});
