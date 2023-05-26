import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCampaignComponent } from './product-campaign.component';

describe('ProductCampaignComponent', () => {
  let component: ProductCampaignComponent;
  let fixture: ComponentFixture<ProductCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
