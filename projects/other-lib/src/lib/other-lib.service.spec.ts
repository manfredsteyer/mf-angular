import { TestBed } from '@angular/core/testing';

import { OtherLibService } from './other-lib.service';

describe('OtherLibService', () => {
  let service: OtherLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
