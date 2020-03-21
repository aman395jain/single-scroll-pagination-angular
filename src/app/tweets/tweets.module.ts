import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TweetsComponent } from "./tweets.component";
import { TweetComponent } from "./tweet/tweet.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule, MatPaginatorModule } from "@angular/material";

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, MatPaginatorModule],
  declarations: [TweetsComponent, TweetComponent]
})
export class TweetsModule {}
