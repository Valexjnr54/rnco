import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffDashboardNavbarComponent } from './aff-dashboard-navbar.component';

describe('AffDashboardNavbarComponent', () => {
  let component: AffDashboardNavbarComponent;
  let fixture: ComponentFixture<AffDashboardNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffDashboardNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffDashboardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
