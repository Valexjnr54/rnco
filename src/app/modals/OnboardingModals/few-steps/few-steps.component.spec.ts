import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FewStepsComponent } from './few-steps.component';

describe('FewStepsComponent', () => {
  let component: FewStepsComponent;
  let fixture: ComponentFixture<FewStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FewStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FewStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
