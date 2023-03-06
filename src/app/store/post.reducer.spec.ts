import { PostState, initialState, postReducer } from './post.reducer';
import { PostService } from '../services/post.service';
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
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('postReducer', () => {

  it('should return the initial state', () => {
    const action = {} as any;
    const state = postReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should handle loadPosts', () => {
    const action = loadPosts();
    const state = postReducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('should handle loadPostsSuccess', () => {
    const data = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
    const action = loadPostsSuccess({ data });
    const state = postReducer(initialState, action);
    expect(state.posts).toEqual(data);
    expect(state.loading).toBe(false);
  });

  it('should handle loadPostsFailure', () => {
    const error = 'Error loading posts';
    const action = loadPostsFailure({ error });
    const state = postReducer(initialState, action);
    expect(state.error).toBe(error);
    expect(state.loading).toBe(false);
  });

  it('should handle createPost', () => {
    const action = createPost;
    const state = postReducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('should handle createPostsSuccess', () => {
    const data = { id: 1, title: 'Post 1' , userId: 1, body: 'body'};
    const action = createPostsSuccess({ data });
    const state = postReducer(initialState, action);
    expect(state.posts).toContain(data.body);
    expect(state.newCreatedPost).toEqual(data.body);
    expect(state.loading).toBe(false);
  });

  it('should handle createPostsFailure', () => {
    const error = 'Error creating post';
    const action = createPostsFailure({ error });
    const state = postReducer(initialState, action);
    expect(state.error).toBe(error);
    expect(state.loading).toBe(false);
  });

  it('should handle getPostByIds', () => {
    const action = getPostByIds;
    const state = postReducer(initialState, action);
    expect(state.loading).toBe(true);
  });

  it('should handle getPostByIdsSuccess', () => {
    const data = { id: 1, title: 'Post 1' , userId: 1, body: 'body'};
    const action = getPostByIdsSuccess({ data });
    const state = postReducer(initialState, action);
    expect(state.selectedPost).toEqual(data);
    expect(state.loading).toBe(false);
  });

  it('should handle getPostByIdsFailure', () => {
    const error = 'Error getting post by ID';
    const action = getPostByIdsFailure({ error });
    const state = postReducer(initialState, action);
    expect(state.error).toBe(error);
    expect(state.loading).toBe(false);
  });
});
