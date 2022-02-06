import { TestBed } from '@angular/core/testing';

import { ApimoviesserviceService } from './apimoviesservice.service';

describe('ApimoviesserviceService', () => {
  let service: ApimoviesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApimoviesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
