import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReportPageComponent } from './admin-report-page.component';

describe('AdminReportPageComponent', () => {
  let component: AdminReportPageComponent;
  let fixture: ComponentFixture<AdminReportPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReportPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
