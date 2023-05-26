import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffTermsandConditionsComponent } from './aff-termsand-conditions.component';

describe('AffTermsandConditionsComponent', () => {
  let component: AffTermsandConditionsComponent;
  let fixture: ComponentFixture<AffTermsandConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffTermsandConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffTermsandConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
