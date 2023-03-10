import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PostEffects } from './post.effects';

describe('UserEffects', () => {
  let actions$: Observable<any>;
  let effects: PostEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PostEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
