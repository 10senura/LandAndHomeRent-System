import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRenterBookingComponent } from './buyer-renter-booking.component';

describe('BuyerRenterBookingComponent', () => {
  let component: BuyerRenterBookingComponent;
  let fixture: ComponentFixture<BuyerRenterBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerRenterBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerRenterBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
