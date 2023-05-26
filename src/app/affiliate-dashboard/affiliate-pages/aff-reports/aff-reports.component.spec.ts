import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffReportsComponent } from './aff-reports.component';

describe('ReportsComponent', () => {
  let component: AffReportsComponent;
  let fixture: ComponentFixture<AffReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
