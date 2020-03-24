import { createFeatureSelector, createSelector } from "@ngrx/store";

import { selectAll } from "./tweet_reducer";

export const tweetsData = createFeatureSelector<any>("tweets");

export const tweetAll = createSelector(tweetsData, selectAll);

export const tweetsDataSelector = createSelector(tweetAll, tweets => {
  const dataForDisplay = [];
  tweets.forEach(element => {
    dataForDisplay.push(...element[0].data);
  });
  return dataForDisplay;
});
