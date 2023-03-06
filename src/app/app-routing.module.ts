import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './compoenents/post/create-post/create-post.component';
import { PostDetailComponent } from './compoenents/post/post-detail/post-detail.component';
import { PostListComponent } from './compoenents/post/post-list/post-list.component';


const routes: Routes = [
  { path: '', component: PostListComponent, pathMatch: 'full' },
  { path: 'post/:id', component: PostDetailComponent, pathMatch: 'full' },
  { path: 'createPost', component: CreatePostComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
