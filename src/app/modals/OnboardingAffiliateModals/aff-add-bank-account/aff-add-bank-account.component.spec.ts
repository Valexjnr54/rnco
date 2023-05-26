import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffAddBankAccountComponent } from './aff-add-bank-account.component';

describe('AffAddBankAccountComponent', () => {
  let component: AffAddBankAccountComponent;
  let fixture: ComponentFixture<AffAddBankAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffAddBankAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffAddBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
