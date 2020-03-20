import { createFeatureSelector, createSelector } from "@ngrx/store";
import { testData, imageData } from "../courses/model/test";
import * as testReducer from "./test_reducer";

export const selectTestImages = createFeatureSelector<any>("testImages");

export const selectImages = createSelector(
  selectTestImages,
  testReducer.testImageReducer
);

export const testImagesSelected = createSelector(
  selectImages,
  testImages => testImages
);
