import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentPendingListComponent } from './admin-payment-pending-list.component';

describe('AdminPaymentPendingListComponent', () => {
  let component: AdminPaymentPendingListComponent;
  let fixture: ComponentFixture<AdminPaymentPendingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPaymentPendingListComponent]
    });
    fixture = TestBed.createComponent(AdminPaymentPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
