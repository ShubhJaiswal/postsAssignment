import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getPostByIds } from '../../../store/post.actions';
import { PostState } from '../../../store/post.reducer';
import { selectedGetPostById } from '../../../store/post.selectors';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post!: Post;
  selectedPost$!: Observable<Post>;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<PostState>) { }


  ngOnInit(): void {

    this.route.params.subscribe((data: any) => {
      const postId = data.id;
      this.loadPosts(Number(postId));
      this.getPostList(Number(postId));
    });

  }

  loadPosts(postId: number) {
    this.store.dispatch(getPostByIds({ id: postId }));
  }

  getPostList(id: number) {
    this.selectedPost$ = this.store.pipe(select(selectedGetPostById));
    this.selectedPost$.subscribe((post: Post) => {
      this.post = post;
    })
  }

  redirectToPostList() {
    this.router.navigate(['']);
  }

}
