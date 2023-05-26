import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateReportsComponent } from './affiliate-reports.component';

describe('AffiliateReportsComponent', () => {
  let component: AffiliateReportsComponent;
  let fixture: ComponentFixture<AffiliateReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliateReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
