import { TweetService } from "./tweets_service";
import { HttpClient, HttpXhrBackend } from "@angular/common/http";

describe("TweetService", () => {
  const httpClient = new HttpClient(
    new HttpXhrBackend({ build: () => new XMLHttpRequest() })
  );
  const tweetService = new TweetService(httpClient);

  it("should get the data for page number", () => {
    tweetService.getTweets(1).subscribe(data => {
      expect(data).toBeTruthy();
    });
  });
});
