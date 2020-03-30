import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, delay } from "rxjs/operators";

@Injectable()
export class TweetService {
  getTweets(pageNumber: number) {
    return this.http
      .get("http://localhost:3000/tweets?_page=" + pageNumber)
      .pipe(
        delay(1000),
        map(res => res)
      );
  }
  constructor(private http: HttpClient) {}
}
