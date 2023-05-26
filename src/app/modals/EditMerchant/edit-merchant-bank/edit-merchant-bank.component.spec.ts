import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMerchantBankComponent } from './edit-merchant-bank.component';

describe('EditMerchantBankComponent', () => {
  let component: EditMerchantBankComponent;
  let fixture: ComponentFixture<EditMerchantBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMerchantBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMerchantBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
