import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffRegistratonCompleteComponent } from './aff-registraton-complete.component';

describe('AffRegistratonCompleteComponent', () => {
  let component: AffRegistratonCompleteComponent;
  let fixture: ComponentFixture<AffRegistratonCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffRegistratonCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffRegistratonCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
