import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUploadKycComponent } from './ad-upload-kyc.component';

describe('AdUploadKycComponent', () => {
  let component: AdUploadKycComponent;
  let fixture: ComponentFixture<AdUploadKycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUploadKycComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdUploadKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
