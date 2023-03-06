import { createReducer, on } from '@ngrx/store';

import {
  createPost,
  createPostsFailure,
  createPostsSuccess,
  getPostByIds,
  getPostByIdsFailure,
  getPostByIdsSuccess,
  loadPosts,
  loadPostsFailure,
  loadPostsSuccess,
} from './post.actions';

export const postFeatureKey = 'post';


export interface PostState {
  posts: any[];
  selectedPost: any;
  loading: boolean;
  newCreatedPost: any;
  error: any;
}

export const initialState: PostState = {
  posts: [],
  selectedPost: null,
  newCreatedPost: null,
  loading: false,
  error: null,
};


export const postReducer = createReducer(
  initialState,
  on(loadPosts, (state) => ({ ...state, loading: true })),
  on(loadPostsSuccess, (state, { data }) => ({ ...state, posts: data, loading: false })),
  on(loadPostsFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(createPost, (state) => ({ ...state, loading: true })),
  on(createPostsSuccess, (state, { data }) =>{
    return ({ ...state, posts: [...state.posts, data.body], newCreatedPost: data.body, loading: false })
  } ),
  on(createPostsFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(getPostByIds, (state) => ({ ...state, loading: true })),
  on(getPostByIdsSuccess, (state, { data }) => ({ ...state, selectedPost: data, loading: false })),
  on(getPostByIdsFailure, (state, { error }) => ({ ...state, error, loading: false })),
);
