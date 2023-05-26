import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPersonalComponent } from './ad-personal.component';

describe('AdPersonalComponent', () => {
  let component: AdPersonalComponent;
  let fixture: ComponentFixture<AdPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
