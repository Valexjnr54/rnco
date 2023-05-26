import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMerchantComponent } from './ad-merchant.component';

describe('AdMerchantComponent', () => {
  let component: AdMerchantComponent;
  let fixture: ComponentFixture<AdMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdMerchantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
