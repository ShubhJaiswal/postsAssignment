import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { createPost } from '../../../store/post.actions';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(private router: Router,
    private store: Store<Post>) { }

  post: Post = {
    title: '',
    body: ''
  };

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.createPost();
      form.reset();
      this.router.navigate([''])
    }
  }


  createPost() {
    this.store.dispatch(createPost({ post: this.post }));

  }

}
