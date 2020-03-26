import { createFeatureSelector, createSelector } from "@ngrx/store";

import { selectAll } from "./tweet_reducer";

export const tweetsData = createFeatureSelector<any>("tweets");

export const tweetAll = createSelector(tweetsData, selectAll);

export const tweetsDataSelector = createSelector(tweetAll, tweets => {
  const dataForDisplay = [];
  // console.log("data---", tweets);
  tweets.forEach(element => {
    dataForDisplay.push(...element.data);
  });
  return dataForDisplay;
});
