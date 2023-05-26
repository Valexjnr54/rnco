import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAffiliatesComponent } from './admin-affiliates.component';

describe('AdminAffiliatesComponent', () => {
  let component: AdminAffiliatesComponent;
  let fixture: ComponentFixture<AdminAffiliatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAffiliatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAffiliatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
