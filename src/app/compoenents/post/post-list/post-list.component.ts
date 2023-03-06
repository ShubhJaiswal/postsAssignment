import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { debounceTime, map, Observable } from 'rxjs';
import { loadPosts } from '../../../store/post.actions';
import { PostState } from '../../../store/post.reducer';
import { selectPosts } from '../../../store/post.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  postList!: MatTableDataSource<Post>;
  displayedColumns: string[] = ['title', 'body'];
  searchTerm!: string;
  posts$!: Observable<Post[]>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private router: Router,
    private store: Store<PostState>) { }

  ngOnInit() {
    this.loadPosts();
    this.getPostList();
  }

  loadPosts() {
    this.store.dispatch(loadPosts());
  }

  getPostList() {
    this.posts$ = this.store.pipe(select(selectPosts));
    this.posts$.subscribe((res: Post[]) => {
      this.posts = res;
      this.filterPostsByTitle(this.searchTerm);
    })
  }

  goToDetailPage(post: Post) {
    this.router.navigate(['post/', post.id])
  }

  onSearch(term: string) {
    this.searchTerm = term;
    this.debouncedFilterPostsByTitle().subscribe();
  }

  filterPostsByTitle(title: string) {
    if (!title) {
      this.postList = new MatTableDataSource<Post>(this.posts);
      this.postList.paginator = this.paginator;
      return;
    }

    const filteredPosts = this.posts.filter((post: any) =>
      post.title.toLowerCase().includes(title.toLowerCase())
    );

    this.postList = new MatTableDataSource<Post>(filteredPosts);
    this.postList.paginator = this.paginator;
  }

  debouncedFilterPostsByTitle() {
    return this.posts$.pipe(
      debounceTime(500),
      map((posts: Post[]) => {
        return posts.filter((post: any) =>
          post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      }),
      map((filteredPosts: Post[]) => {
        this.postList = new MatTableDataSource<Post>(filteredPosts);
        this.postList.paginator = this.paginator;
      })
    );
  }

}
