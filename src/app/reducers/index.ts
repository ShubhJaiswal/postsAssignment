import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromPost from '../store/post.reducer';

export const stateFeatureKey = 'state';

export interface State {

  [fromPost.postFeatureKey]: fromPost.PostState;
}

export const reducers: ActionReducerMap<State> = {

  [fromPost.postFeatureKey]: fromPost.postReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
