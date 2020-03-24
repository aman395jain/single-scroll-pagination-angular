import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InfiniteScrollComponent } from "../infinite-scroll/infinite-scroll.component";
import { TweetService } from "./tweets_service";

@NgModule({
  imports: [CommonModule],
  declarations: [InfiniteScrollComponent],
  exports: [InfiniteScrollComponent],
  providers: [TweetService]
})
export class SharedModule {}
