import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAffBankDetailsComponent } from './ad-aff-bank-details.component';

describe('AdAffBankDetailsComponent', () => {
  let component: AdAffBankDetailsComponent;
  let fixture: ComponentFixture<AdAffBankDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAffBankDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAffBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
