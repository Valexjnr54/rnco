import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAffiliateOnboardComponent } from './ad-affiliate-onboard.component';

describe('AdAffiliateOnboardComponent', () => {
  let component: AdAffiliateOnboardComponent;
  let fixture: ComponentFixture<AdAffiliateOnboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAffiliateOnboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAffiliateOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
