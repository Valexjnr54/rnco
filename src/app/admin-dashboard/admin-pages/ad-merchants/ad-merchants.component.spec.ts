import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMerchantsComponent } from './ad-merchants.component';

describe('AdMerchantsComponent', () => {
  let component: AdMerchantsComponent;
  let fixture: ComponentFixture<AdMerchantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdMerchantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdMerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
