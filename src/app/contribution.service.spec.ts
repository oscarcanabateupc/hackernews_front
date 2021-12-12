import { TestBed } from '@angular/core/testing';

import { ContributionsService } from './contribution.service';

describe('NewsEntryService', () => {
  let service: ContributionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContributionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
