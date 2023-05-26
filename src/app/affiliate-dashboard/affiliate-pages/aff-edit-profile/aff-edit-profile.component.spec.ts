import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffEditProfileComponent } from './aff-edit-profile.component';

describe('EditProfileComponent', () => {
  let component: AffEditProfileComponent;
  let fixture: ComponentFixture<AffEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
