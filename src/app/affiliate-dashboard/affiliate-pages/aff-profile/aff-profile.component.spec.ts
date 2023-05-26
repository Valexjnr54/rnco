import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffProfileComponent } from './aff-profile.component';

describe('ProfileComponent', () => {
  let component: AffProfileComponent;
  let fixture: ComponentFixture<AffProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
