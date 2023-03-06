import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post';

export const loadPosts = createAction(
  '[Post] Load Posts'
);

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ data: any }>()
);

export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: any }>()
);

export const createPost = createAction(
  '[CreatePost] Create Post',
  props<{ post: any }>()
);

export const createPostsSuccess = createAction(
  '[CreatePost] Create Post Success',
  props<{ data: any }>()
);

export const createPostsFailure = createAction(
  '[CreatePost] Create Post Failure',
  props<{ error: any }>()
);

export const getPostByIds = createAction(
  '[GetPostById] Get Post By Id',
  props<{ id: number }>()
);

export const getPostByIdsSuccess = createAction(
  '[GetPostById] Get Post By Id Success',
  props<{ data: Post }>()
);

export const getPostByIdsFailure = createAction(
  '[GetPostById] Get Post By Id Failure',
  props<{ error: any }>()
);
