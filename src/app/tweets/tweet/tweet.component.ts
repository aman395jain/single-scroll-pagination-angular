import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tweet",
  template: `
    <div class="card" *ngIf="tweet">
      <div class="card-body">
        <span>{{ index }}</span>
        <h5 class="card-title">{{ tweet.username }}</h5>
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
