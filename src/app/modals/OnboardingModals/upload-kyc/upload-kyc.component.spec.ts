import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadKYCComponent } from './upload-kyc.component';

describe('UploadKYCComponent', () => {
  let component: UploadKYCComponent;
  let fixture: ComponentFixture<UploadKYCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadKYCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadKYCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
