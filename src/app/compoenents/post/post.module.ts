import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SearchPostComponent } from './search-post/search-post.component';

import { PostService } from '../../services/post.service';
import { PostEffects } from '../../store/post.effects';

import * as fromPost from '../../store/post.reducer';
import { MaterialModule } from 'src/app/material/material.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent,
    SearchPostComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature(fromPost.postFeatureKey, fromPost.postReducer),
    EffectsModule.forFeature([PostEffects])
  ],
  providers: [PostService],
  exports: [
    PostListComponent,
    PostDetailComponent,
    SearchPostComponent,
    CreatePostComponent
  ]
})
export class PostModule { }
