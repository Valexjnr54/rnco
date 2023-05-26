import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMerchantPersonalComponent } from './edit-merchant-personal.component';

describe('EditMerchantPersonalComponent', () => {
  let component: EditMerchantPersonalComponent;
  let fixture: ComponentFixture<EditMerchantPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMerchantPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMerchantPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
