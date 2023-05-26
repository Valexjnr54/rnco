import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdEditMerchantComponent } from './ad-edit-merchant.component';

describe('AdEditMerchantComponent', () => {
  let component: AdEditMerchantComponent;
  let fixture: ComponentFixture<AdEditMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdEditMerchantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdEditMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
