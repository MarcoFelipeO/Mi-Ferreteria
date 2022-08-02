import { TestBed } from '@angular/core/testing';

import { VerifyClientGuard } from './verify-client.guard';

describe('VerifyClientGuard', () => {
  let guard: VerifyClientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifyClientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
