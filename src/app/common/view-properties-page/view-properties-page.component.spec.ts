import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPropertiesPageComponent } from './view-properties-page.component';

describe('ViewPropertiesPageComponent', () => {
  let component: ViewPropertiesPageComponent;
  let fixture: ComponentFixture<ViewPropertiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPropertiesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPropertiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
