import { TestBed } from '@angular/core/testing';

import { GrillerService } from './griller.service';

describe('GrillerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrillerService = TestBed.get(GrillerService);
    expect(service).toBeTruthy();
  });
});
