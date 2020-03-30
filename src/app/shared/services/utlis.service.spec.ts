import { TestBed } from '@angular/core/testing';

import { UtlisService } from './utlis.service';

describe('UtlisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtlisService = TestBed.get(UtlisService);
    expect(service).toBeTruthy();
  });
});
