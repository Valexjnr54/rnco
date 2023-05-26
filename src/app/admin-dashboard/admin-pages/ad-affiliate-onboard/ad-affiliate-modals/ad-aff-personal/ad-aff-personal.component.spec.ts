import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAffPersonalComponent } from './ad-aff-personal.component';

describe('AdAffPersonalComponent', () => {
  let component: AdAffPersonalComponent;
  let fixture: ComponentFixture<AdAffPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAffPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAffPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
