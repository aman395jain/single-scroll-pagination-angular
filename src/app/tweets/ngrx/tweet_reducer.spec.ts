import * as tweetStore from "./store";
import * as tweetAction from "./tweet_action";
import { tweetReducer } from "./tweet_reducer";

describe("tweetReducer", () => {
  let initialState;

  beforeEach(() => {
    initialState = { ids: [], entities: {} };
  });

  it("should return the default state", () => {
    const result = tweetReducer(undefined, {} as any);

    expect(result).toEqual(initialState);
  });

  it("should test tweetReducer to add one tweet data", () => {
    const result = tweetReducer(
      initialState,
      tweetAction.addNewTweets({
        payload: {
          tweetData: tweetStore.mockTweet
        }
      })
    );
    expect(result.ids).toContain(1);
  });
});
