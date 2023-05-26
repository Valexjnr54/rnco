import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffFewStepsComponent } from './aff-few-steps.component';

describe('AffFewStepsComponent', () => {
  let component: AffFewStepsComponent;
  let fixture: ComponentFixture<AffFewStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffFewStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffFewStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
