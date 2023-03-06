import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Post } from '../models/post';

import {
  loadPosts,
  loadPostsSuccess,
  loadPostsFailure,
  createPost,
  createPostsSuccess,
  createPostsFailure,
  getPostByIds,
  getPostByIdsSuccess,
  getPostByIdsFailure,
} from './post.actions';

import { PostService } from '../services/post.service';

@Injectable()
export class PostEffects {
  
  constructor(private actions$: Actions, private postService: PostService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() =>
        this.postService.getPostList().pipe(
          map((data: any) => loadPostsSuccess({ data })),
          catchError((error: any) => of(loadPostsFailure({ error })))
        )
      )
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPost),
      mergeMap(({ post }) =>
        this.postService.createNewPost(post).pipe(
          map((data: any) => createPostsSuccess({ data }) ),
          catchError((error: any) => of(createPostsFailure({ error })))
        )
      )
    )
  );

  getPostByIds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPostByIds),
      mergeMap(({ id }) =>
        this.postService.getPostById(id).pipe(
          map((data: Post) => {
            return getPostByIdsSuccess({ data })
          }),
          catchError((error: any) => of(getPostByIdsFailure({ error })))
        )
      )
    )
  );

}
