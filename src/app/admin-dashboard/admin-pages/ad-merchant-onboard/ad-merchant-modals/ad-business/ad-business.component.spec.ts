import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBusinessComponent } from './ad-business.component';

describe('AdBusinessComponent', () => {
  let component: AdBusinessComponent;
  let fixture: ComponentFixture<AdBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
