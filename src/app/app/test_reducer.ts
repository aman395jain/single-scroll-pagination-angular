import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from "@ngrx/store";

import * as testActions from "./test_action";
import { imageData } from "../courses/model/test";

export const initialTestImageState: imageData[] = [
  {
    image: [
      { imageId: "", imageType: "" },
      { imageId: "", imageType: "" },
      { imageId: "", imageType: "" }
    ],
    imageDesc: ""
  }
];

export const testImageReducer = createReducer(
  initialTestImageState,
  on(testActions.testDataAction, (state, testImages) => {
    console.log("in the test reducer", testImages);
    console.log("in the test reducer>>>>>", { ...state, testImages });
    return { ...state, testImages };
  })
);
