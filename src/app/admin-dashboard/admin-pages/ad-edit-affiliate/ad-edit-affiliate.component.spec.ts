import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdEditAffiliateComponent } from './ad-edit-affiliate.component';

describe('AdEditAffiliateComponent', () => {
  let component: AdEditAffiliateComponent;
  let fixture: ComponentFixture<AdEditAffiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdEditAffiliateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdEditAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
