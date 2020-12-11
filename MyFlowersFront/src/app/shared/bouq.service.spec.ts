import { TestBed } from '@angular/core/testing';

import { BouqService } from './bouq.service';

describe('BouqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BouqService = TestBed.get(BouqService);
    expect(service).toBeTruthy();
  });
});
