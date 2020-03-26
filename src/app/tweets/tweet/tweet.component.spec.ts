import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TweetComponent } from "./tweet.component";
describe("TweetComponent", () => {
  let component: TweetComponent;
  let fixture: ComponentFixture<TweetComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TweetComponent]
    });
    fixture = TestBed.createComponent(TweetComponent);
    component = fixture.componentInstance;
  });
  it("can load instance", () => {
    expect(component).toBeTruthy();
  });
});
