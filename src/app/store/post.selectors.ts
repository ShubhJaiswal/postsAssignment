import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PostState, postFeatureKey } from './post.reducer';

export const selectPostState = createFeatureSelector<PostState>(postFeatureKey);

export const selectPosts = createSelector(
  selectPostState,
  (state: PostState) => state.posts
);

export const selectSelectedPost = createSelector(
  selectPostState,
  (state: PostState) => {
    return  state.selectedPost
  }
);

export const selectLoading = createSelector(
  selectPostState,
  (state: PostState) => state.loading
);

export const selectError = createSelector(
  selectPostState,
  (state: PostState) => state.error
);

export const selectedGetPostById = createSelector(
    selectPostState,
    (state: PostState) => {
        console.log('selector ',  state.selectedPost);
        return  state.selectedPost
    }
  );

export const selectGetPostByIdLoading = createSelector(
    selectPostState,
  (state: PostState) => {
    console.log('selector ',  state.loading);
    return  state.loading
}
  
  
);

export const selectGetPostByIdError = createSelector(
    selectPostState,
  (state: PostState) => state.error
);