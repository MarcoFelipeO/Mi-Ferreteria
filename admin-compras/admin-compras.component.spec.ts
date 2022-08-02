import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComprasComponent } from './admin-compras.component';

describe('AdminComprasComponent', () => {
  let component: AdminComprasComponent;
  let fixture: ComponentFixture<AdminComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
