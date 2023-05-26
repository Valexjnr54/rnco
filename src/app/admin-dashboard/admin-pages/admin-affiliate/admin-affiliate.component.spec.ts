import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAffiliateComponent } from './admin-affiliate.component';

describe('AdminAffiliateComponent', () => {
  let component: AdminAffiliateComponent;
  let fixture: ComponentFixture<AdminAffiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAffiliateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
