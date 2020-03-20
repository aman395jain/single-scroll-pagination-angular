import { Injectable } from "@angular/core";

import * as testData from "../courses/model/test";
import { Observable, BehaviorSubject } from "rxjs";

const defaultData = [
  {
    image: [{ imageId: "imageId11", imageType: "imageType11" }],
    imageDesc: "cds Image"
  }
];

@Injectable({
  providedIn: "root"
})
export class TestService {
  private testBehivourSubject = new BehaviorSubject<testData.imageData[]>(
    defaultData
  );
  testBehivourSubject$ = this.testBehivourSubject.asObservable();
  constructor() {}

  testFunction() {
    this.testBehivourSubject.next(testData.testData);
  }
}
