import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffMarketPlaceComponent } from './aff-market-place.component';

describe('AffMarketPlaceComponent', () => {
  let component: AffMarketPlaceComponent;
  let fixture: ComponentFixture<AffMarketPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffMarketPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffMarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
