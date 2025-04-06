import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRenterDashboardComponent } from './buyer-renter-dashboard.component';

describe('BuyerRenterDashboardComponent', () => {
  let component: BuyerRenterDashboardComponent;
  let fixture: ComponentFixture<BuyerRenterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerRenterDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerRenterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
