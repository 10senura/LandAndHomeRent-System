import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAuilbilityCalanderComponent } from './owner-auilbility-calander.component';

describe('OwnerAuilbilityCalanderComponent', () => {
  let component: OwnerAuilbilityCalanderComponent;
  let fixture: ComponentFixture<OwnerAuilbilityCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerAuilbilityCalanderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerAuilbilityCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
