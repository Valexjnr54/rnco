import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffDashboardComponent } from './aff-dashboard.component';

describe('AffDashboardComponent', () => {
  let component: AffDashboardComponent;
  let fixture: ComponentFixture<AffDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
