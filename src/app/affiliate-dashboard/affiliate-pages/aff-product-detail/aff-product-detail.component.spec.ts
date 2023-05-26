import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffProductDetailComponent } from './aff-product-detail.component';

describe('AffProductDetailComponent', () => {
  let component: AffProductDetailComponent;
  let fixture: ComponentFixture<AffProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffProductDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
