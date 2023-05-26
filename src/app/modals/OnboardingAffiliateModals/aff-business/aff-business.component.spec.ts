import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffBusinessComponent } from './aff-business.component';

describe('AffBusinessComponent', () => {
  let component: AffBusinessComponent;
  let fixture: ComponentFixture<AffBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
