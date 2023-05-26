import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAffBusinessComponent } from './ad-aff-business.component';

describe('AdAffBusinessComponent', () => {
  let component: AdAffBusinessComponent;
  let fixture: ComponentFixture<AdAffBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAffBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAffBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
