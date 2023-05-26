import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffRegistrationPaymentComponent } from './aff-registration-payment.component';

describe('AffRegistrationPaymentComponent', () => {
  let component: AffRegistrationPaymentComponent;
  let fixture: ComponentFixture<AffRegistrationPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffRegistrationPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffRegistrationPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
