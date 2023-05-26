import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffDashboardSidebarComponent } from './aff-dashboard-sidebar.component';

describe('AffDashboardSidebarComponent', () => {
  let component: AffDashboardSidebarComponent;
  let fixture: ComponentFixture<AffDashboardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffDashboardSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffDashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
