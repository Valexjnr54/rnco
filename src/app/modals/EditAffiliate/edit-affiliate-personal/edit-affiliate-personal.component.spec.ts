import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAffiliatePersonalComponent } from './edit-affiliate-personal.component';

describe('EditAffiliatePersonalComponent', () => {
  let component: EditAffiliatePersonalComponent;
  let fixture: ComponentFixture<EditAffiliatePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAffiliatePersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAffiliatePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
