import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRegistrationCompleteComponent } from './ad-registration-complete.component';

describe('AdRegistrationCompleteComponent', () => {
  let component: AdRegistrationCompleteComponent;
  let fixture: ComponentFixture<AdRegistrationCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdRegistrationCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdRegistrationCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
