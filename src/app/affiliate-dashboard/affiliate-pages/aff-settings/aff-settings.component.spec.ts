import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffSettingsComponent } from './aff-settings.component';

describe('SettingsComponent', () => {
  let component: AffSettingsComponent;
  let fixture: ComponentFixture<AffSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
