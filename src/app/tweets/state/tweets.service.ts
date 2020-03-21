import { Injectable } from "@angular/core";
import { TweetsStore } from "./tweets.store";
import { getMockData } from "../mock.data";
import { transaction } from "@datorama/akita";

@Injectable({ providedIn: "root" })
export class TweetsService {
  constructor(private tweetsStore: TweetsStore) {}

  get(page: number) {
    this.tweetsStore.setLoading(true);
    getMockData({ page }).subscribe(res => this.updateTweets(res));
  }

  @transaction()
  private updateTweets(res) {
    const nextPage = res.currentPage + 1;
    this.tweetsStore.add(res.data);
    this.tweetsStore.updatePage({ hasMore: res.hasMore, page: nextPage });
    this.tweetsStore.setLoading(false);
  }
}
