import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserAcceptedListComponent } from './admin-user-accepted-list.component';

describe('AdminUserAcceptedListComponent', () => {
  let component: AdminUserAcceptedListComponent;
  let fixture: ComponentFixture<AdminUserAcceptedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserAcceptedListComponent]
    });
    fixture = TestBed.createComponent(AdminUserAcceptedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
