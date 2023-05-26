import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAffiliateBusinessComponent } from './edit-affiliate-business.component';

describe('EditAffiliateBusinessComponent', () => {
  let component: EditAffiliateBusinessComponent;
  let fixture: ComponentFixture<EditAffiliateBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAffiliateBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAffiliateBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
