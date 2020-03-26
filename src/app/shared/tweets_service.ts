import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map, delay, debounceTime } from "rxjs/operators";

@Injectable()
export class TweetService {
  // tweetData = {
  //   data: {},
  //   currentPage: 0,
  //   hasMore: true,
  //   perPage: 10,
  //   total: 50,
  //   lastPage: 5
  // };
  constructor(private http: HttpClient) {}

  getTweets(pageNumber: number) {
    return this.http
      .get("http://localhost:3000/tweets?_page=" + pageNumber)
      .pipe(map(res => res));
  }
}
