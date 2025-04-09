import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveListPageComponent } from './admin-approve-list-page.component';

describe('AdminApproveListPageComponent', () => {
  let component: AdminApproveListPageComponent;
  let fixture: ComponentFixture<AdminApproveListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminApproveListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApproveListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
