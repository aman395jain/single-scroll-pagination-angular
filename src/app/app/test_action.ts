import { createAction, props } from "@ngrx/store";
import { imageData } from "../courses/model/test";

export const testDataAction = createAction(
  "[LOAD TEST DATA] LOAD TEST DATA",
  props<{ testImagesData: imageData[] }>()
);
