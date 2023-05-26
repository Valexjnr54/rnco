import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMarketplaceCardComponent } from './admin-marketplace-card.component';

describe('AdminMarketplaceCardComponent', () => {
  let component: AdminMarketplaceCardComponent;
  let fixture: ComponentFixture<AdminMarketplaceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMarketplaceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMarketplaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
