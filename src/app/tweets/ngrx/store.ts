import { ActionReducerMap } from "@ngrx/store";

export const reducers: ActionReducerMap<any> = {};

export interface tweetState {
  ids: number;
  currentPage: number;
  hasMore: boolean;
  perPage: number;
  total: number;
  lastPage: number;
  data: any;
}

export const initialState: any = {
  ids: 1,
  currentPage: 1,
  hasMore: true,
  perPage: 10,
  total: 30,
  lastPage: 3,
  data: [{}]
};
