import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndFilterPageComponent } from './search-and-filter-page.component';

describe('SearchAndFilterPageComponent', () => {
  let component: SearchAndFilterPageComponent;
  let fixture: ComponentFixture<SearchAndFilterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAndFilterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAndFilterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
