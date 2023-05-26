import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffPersonalComponent } from './aff-personal.component';

describe('AffPersonalComponent', () => {
  let component: AffPersonalComponent;
  let fixture: ComponentFixture<AffPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
