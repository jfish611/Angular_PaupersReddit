import { TestBed } from '@angular/core/testing';

import { RedditAPIService } from './reddit-api.service';

describe('RedditAPIServiceService', () => {
  let service: RedditAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedditAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
