import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerViewBookingPageComponent } from './owner-view-booking-page.component';

describe('OwnerViewBookingPageComponent', () => {
  let component: OwnerViewBookingPageComponent;
  let fixture: ComponentFixture<OwnerViewBookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerViewBookingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerViewBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
