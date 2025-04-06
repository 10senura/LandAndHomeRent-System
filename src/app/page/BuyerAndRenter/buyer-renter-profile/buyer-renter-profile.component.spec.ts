import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRenterProfileComponent } from './buyer-renter-profile.component';

describe('BuyerRenterProfileComponent', () => {
  let component: BuyerRenterProfileComponent;
  let fixture: ComponentFixture<BuyerRenterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerRenterProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerRenterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
