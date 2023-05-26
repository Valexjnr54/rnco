import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffProductCardComponent } from './aff-product-card.component';

describe('AffProductCardComponent', () => {
  let component: AffProductCardComponent;
  let fixture: ComponentFixture<AffProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
