import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateCampaignComponent } from './affiliate-campaign.component';

describe('AffiliateCampaignComponent', () => {
  let component: AffiliateCampaignComponent;
  let fixture: ComponentFixture<AffiliateCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliateCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
