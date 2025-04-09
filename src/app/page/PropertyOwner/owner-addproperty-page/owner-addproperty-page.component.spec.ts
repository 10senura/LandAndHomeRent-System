import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAddpropertyPageComponent } from './owner-addproperty-page.component';

describe('OwnerAddpropertyPageComponent', () => {
  let component: OwnerAddpropertyPageComponent;
  let fixture: ComponentFixture<OwnerAddpropertyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerAddpropertyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerAddpropertyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
