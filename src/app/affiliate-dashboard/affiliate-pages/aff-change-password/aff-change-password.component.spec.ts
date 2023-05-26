import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffChangePasswordComponent } from './aff-change-password.component';

describe('ChangePasswordComponent', () => {
  let component: AffChangePasswordComponent;
  let fixture: ComponentFixture<AffChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
