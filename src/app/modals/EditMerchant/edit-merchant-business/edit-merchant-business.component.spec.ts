import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMerchantBusinessComponent } from './edit-merchant-business.component';

describe('EditMerchantBusinessComponent', () => {
  let component: EditMerchantBusinessComponent;
  let fixture: ComponentFixture<EditMerchantBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMerchantBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMerchantBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
