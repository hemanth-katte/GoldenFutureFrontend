import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserPendingListComponent } from './admin-user-pending-list.component';

describe('AdminUserPendingListComponent', () => {
  let component: AdminUserPendingListComponent;
  let fixture: ComponentFixture<AdminUserPendingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserPendingListComponent]
    });
    fixture = TestBed.createComponent(AdminUserPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
