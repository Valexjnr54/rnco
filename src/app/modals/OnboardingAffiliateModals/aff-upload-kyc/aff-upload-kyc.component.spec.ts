import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffUploadKycComponent } from './aff-upload-kyc.component';

describe('AffUploadKycComponent', () => {
  let component: AffUploadKycComponent;
  let fixture: ComponentFixture<AffUploadKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffUploadKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffUploadKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
