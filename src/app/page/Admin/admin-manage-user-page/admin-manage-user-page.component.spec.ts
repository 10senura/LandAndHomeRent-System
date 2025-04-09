import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManageUserPageComponent } from './admin-manage-user-page.component';

describe('AdminManageUserPageComponent', () => {
  let component: AdminManageUserPageComponent;
  let fixture: ComponentFixture<AdminManageUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageUserPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManageUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
