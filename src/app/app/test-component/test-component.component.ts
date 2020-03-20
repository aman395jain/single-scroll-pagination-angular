import { Component, OnInit } from "@angular/core";
import { TestService } from "../test.service";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../reducers";
import { Observable } from "rxjs";
import { imageData } from "../../courses/model/test";
import { testImagesSelected } from "../test_selector";

@Component({
  selector: "test-component",
  templateUrl: "./test-component.component.html",
  styleUrls: ["./test-component.component.scss"]
})
export class TestComponentComponent implements OnInit {
  testImagesAtComponent: Observable<any>;
  constructor(
    private testService: TestService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.testService.testFunction();
    this.testService.testBehivourSubject$.subscribe(value => {
      console.log("value>>>>>", value);
    });
    // this.testImagesAtComponent = this.store.pipe(select(testImagesSelected));
    // this.testImagesAtComponent.subscribe(ffff => {
    //   console.log("hdhhdhdh", ffff);
    // });
  }
}
