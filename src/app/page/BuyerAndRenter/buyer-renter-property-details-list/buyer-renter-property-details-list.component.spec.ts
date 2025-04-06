import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRenterPropertyDetailsListComponent } from './buyer-renter-property-details-list.component';

describe('BuyerRenterPropertyDetailsListComponent', () => {
  let component: BuyerRenterPropertyDetailsListComponent;
  let fixture: ComponentFixture<BuyerRenterPropertyDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerRenterPropertyDetailsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerRenterPropertyDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
