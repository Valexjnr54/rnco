import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMerchantOnboardComponent } from './ad-merchant-onboard.component';

describe('AdMerchantOnboardComponent', () => {
  let component: AdMerchantOnboardComponent;
  let fixture: ComponentFixture<AdMerchantOnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdMerchantOnboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdMerchantOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
