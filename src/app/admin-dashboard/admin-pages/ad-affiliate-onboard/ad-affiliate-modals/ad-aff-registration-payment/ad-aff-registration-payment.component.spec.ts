import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAffRegistrationPaymentComponent } from './ad-aff-registration-payment.component';

describe('AdAffRegistrationPaymentComponent', () => {
  let component: AdAffRegistrationPaymentComponent;
  let fixture: ComponentFixture<AdAffRegistrationPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAffRegistrationPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAffRegistrationPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
