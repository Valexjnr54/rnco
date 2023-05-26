import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAffiliateBankComponent } from './edit-affiliate-bank.component';

describe('EditAffiliateBankComponent', () => {
  let component: EditAffiliateBankComponent;
  let fixture: ComponentFixture<EditAffiliateBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAffiliateBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAffiliateBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
