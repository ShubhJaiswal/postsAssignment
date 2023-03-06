import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostService } from './post.service';
import { Post } from '../models/post';

fdescribe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ PostService ]
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('post service should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve a list of posts', () => {
    const mockPosts: Post[] = [
      { id: 1, userId: 1, title: 'Post 1', body: 'Body of post 1' },
      { id: 2, userId: 1, title: 'Post 2', body: 'Body of post 2' },
      { id: 3, userId: 2, title: 'Post 3', body: 'Body of post 3' }
    ];

    service.getPostList().subscribe(posts => {
      expect(posts).toEqual(mockPosts);
    });

    const request = httpMock.expectOne(`${service.url}posts`);
    expect(request.request.method).toBe('GET');
    request.flush(mockPosts);
  });


  it('should retrieve a post by post id', () => {
    const mockPost: Post = 
      { id: 1, userId: 1, title: 'Post 1', body: 'Body of post 1' }
    

    service.getPostById(1).subscribe(post => {
      expect(post).toEqual(mockPost);
    });

    const request = httpMock.expectOne(`${service.url}posts/${mockPost.id}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockPost);
  });
  

  it('should create a new post', () => {
    const mockPost: Post = {
      title: 'Test Post',
      body: 'Lorem ipsum dolor sit amet.',
    };

    service.createNewPost(mockPost).subscribe((post: Post) => {
      expect(post).toEqual(mockPost);
    });

    
    const req = httpMock.expectOne(`${service.url}posts`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({ body: mockPost });

    req.flush(mockPost);
  });
});
