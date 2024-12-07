import { TestBed } from '@angular/core/testing';

import { ReqresApiService } from './reqres-api.service';

describe('ReqresApiService', () => {
  let service: ReqresApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqresApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
