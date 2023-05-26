import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRegistrationPaymentComponent } from './ad-registration-payment.component';

describe('AdRegistrationPaymentComponent', () => {
  let component: AdRegistrationPaymentComponent;
  let fixture: ComponentFixture<AdRegistrationPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdRegistrationPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdRegistrationPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
