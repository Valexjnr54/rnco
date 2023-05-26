import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAffUploadKycComponent } from './ad-aff-upload-kyc.component';

describe('AdAffUploadKycComponent', () => {
  let component: AdAffUploadKycComponent;
  let fixture: ComponentFixture<AdAffUploadKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAffUploadKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAffUploadKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
