import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, act } from "@ngrx/effects";
import * as testActions from "./test_action";
import { userNameAction } from "../auth/auth.actions";
import { flatMap, tap, map } from "rxjs/operators";
import { dispatch } from "rxjs/internal/observable/pairs";
import { Store } from "@ngrx/store";
import { AppState } from "../reducers";

import { testData, imageData } from "../courses/model/test";

@Injectable()
export class TestEffect {
  loadTestImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userNameAction),
      flatMap(username => {
        let testImagesData: imageData[] = [
          {
            image: [{ imageId: "imageId11", imageType: "imageType11" }],
            imageDesc: "cds Image"
          }
        ];
        testImagesData = testData;
        this.store.dispatch(testActions.testDataAction({ testImagesData }));
        return [];
      })
    )
  );
  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
