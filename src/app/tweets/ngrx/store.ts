import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";

export interface AppState {}
export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export interface tweetState {
  currentPage: number;
  hasMore: boolean;
  perPage: number;
  total: number;
  lastPage: number;
  data: any;
}

export const initialState: tweetState = {
  currentPage: 1,
  hasMore: true,
  perPage: 10,
  total: 30,
  lastPage: 3,
  data: [{}]
};
