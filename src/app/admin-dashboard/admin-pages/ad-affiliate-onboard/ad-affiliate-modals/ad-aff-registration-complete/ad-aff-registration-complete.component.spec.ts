import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAffRegistrationCompleteComponent } from './ad-aff-registration-complete.component';

describe('AdAffRegistrationCompleteComponent', () => {
  let component: AdAffRegistrationCompleteComponent;
  let fixture: ComponentFixture<AdAffRegistrationCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAffRegistrationCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAffRegistrationCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
