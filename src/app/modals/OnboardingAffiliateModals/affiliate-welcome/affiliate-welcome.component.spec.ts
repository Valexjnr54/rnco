import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateWelcomeComponent } from './affiliate-welcome.component';

describe('AffiliateWelcomeComponent', () => {
  let component: AffiliateWelcomeComponent;
  let fixture: ComponentFixture<AffiliateWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliateWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliateWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
