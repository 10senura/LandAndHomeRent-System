import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAdminContactPageComponent } from './owner-admin-contact-page.component';

describe('OwnerAdminContactPageComponent', () => {
  let component: OwnerAdminContactPageComponent;
  let fixture: ComponentFixture<OwnerAdminContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerAdminContactPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerAdminContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
