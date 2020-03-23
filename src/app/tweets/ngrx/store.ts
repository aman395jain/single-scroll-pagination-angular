import { ActionReducerMap } from "@ngrx/store";

export const reducers: ActionReducerMap<any> = {};

export interface tweetState {
  currentPage: number;
  hasMore: boolean;
  perPage: number;
  total: number;
  lastPage: number;
  data: any;
}

export const initialState: any = {
  currentPage: 1,
  hasMore: true,
  perPage: 10,
  total: 30,
  lastPage: 3,
  data: [{}]
};