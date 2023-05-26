import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffResetPasswordComponent } from './aff-reset-password.component';

describe('ResetPasswordComponent', () => {
  let component: AffResetPasswordComponent;
  let fixture: ComponentFixture<AffResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffResetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
