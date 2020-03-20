import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  Input,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "single-page-scroll",
  templateUrl: "./single-page-scroll.component.html",
  styleUrls: ["./single-page-scroll.component.scss"]
})
export class SinglePageScrollComponent implements OnInit, OnDestroy {
  private observer: IntersectionObserver;
  constructor(private host: ElementRef) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
