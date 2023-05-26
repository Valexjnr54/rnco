import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBankDetailsComponent } from './ad-bank-details.component';

describe('AdBankDetailsComponent', () => {
  let component: AdBankDetailsComponent;
  let fixture: ComponentFixture<AdBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBankDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
