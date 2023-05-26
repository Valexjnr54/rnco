import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardCompleteComponent } from './onboard-complete.component';

describe('OnboardCompleteComponent', () => {
  let component: OnboardCompleteComponent;
  let fixture: ComponentFixture<OnboardCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
