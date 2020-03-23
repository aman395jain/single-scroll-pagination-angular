import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tweet",
  template: `
    <div class="card" *ngIf="tweet">
      <div class="card-body">
        <h5 class="card-title">{{ tweet.username }}</h5>
        <span>{{ index }}</span>
        <p class="card-text">{{ tweet.text }}</p>
      </div>
    </div>
  `,
  styleUrls: ["./tweet.component.css"]
})
export class TweetComponent {
  @Input() tweet: any;
  @Input() index: number;
}
