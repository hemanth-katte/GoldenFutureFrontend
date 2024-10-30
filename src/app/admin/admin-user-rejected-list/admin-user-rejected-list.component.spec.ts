import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserRejectedListComponent } from './admin-user-rejected-list.component';

describe('AdminUserRejectedListComponent', () => {
  let component: AdminUserRejectedListComponent;
  let fixture: ComponentFixture<AdminUserRejectedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserRejectedListComponent]
    });
    fixture = TestBed.createComponent(AdminUserRejectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
