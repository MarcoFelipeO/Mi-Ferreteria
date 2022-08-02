import { TestBed } from '@angular/core/testing';

import { VerifyPerfilGuard } from './verify-perfil.guard';

describe('VerifyPerfilGuard', () => {
  let guard: VerifyPerfilGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifyPerfilGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
