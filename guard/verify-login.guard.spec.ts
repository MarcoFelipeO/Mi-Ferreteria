import { TestBed } from '@angular/core/testing';

import { VerifyLoginGuard } from './verify-login.guard';

describe('VerifyLoginGuard', () => {
  let guard: VerifyLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifyLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
