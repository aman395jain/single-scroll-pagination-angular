import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map, delay, debounceTime } from "rxjs/operators";

@Injectable()
export class TweetService {
  testData = {
    data: [],
    currentPage: 0,
    hasMore: true,
    perPage: 10,
    total: 30,
    lastPage: 3
  };
  constructor(private http: HttpClient) {}

  getTweets(pageNumber) {
    return this.http
      .get("http://localhost:3000/tweets?_page=" + pageNumber)
      .pipe(
        map(res => {
          this.testData.data = JSON.parse(JSON.stringify(res));
          this.testData.currentPage = pageNumber;
          return this.testData;
        })
      );
  }
}
