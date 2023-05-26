import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratonCompleteComponent } from './registraton-complete.component';

describe('RegistratonCompleteComponent', () => {
  let component: RegistratonCompleteComponent;
  let fixture: ComponentFixture<RegistratonCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistratonCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistratonCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
