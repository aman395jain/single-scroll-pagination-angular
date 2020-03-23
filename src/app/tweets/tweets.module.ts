import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TweetsComponent } from "./tweets.component";
import { TweetComponent } from "./tweet/tweet.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule, MatPaginatorModule } from "@angular/material";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { tweetReducer } from "./ngrx/tweet_reducer";
import { TweetEffect } from "./ngrx/tweet_effect";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatPaginatorModule,
    StoreModule.forFeature("tweets", tweetReducer),
    EffectsModule.forFeature([TweetEffect])
  ],
  declarations: [TweetsComponent, TweetComponent]
})
export class TweetsModule {}
