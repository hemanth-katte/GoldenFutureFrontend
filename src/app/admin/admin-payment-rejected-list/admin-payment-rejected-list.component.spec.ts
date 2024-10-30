import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentRejectedListComponent } from './admin-payment-rejected-list.component';

describe('AdminPaymentRejectedListComponent', () => {
  let component: AdminPaymentRejectedListComponent;
  let fixture: ComponentFixture<AdminPaymentRejectedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPaymentRejectedListComponent]
    });
    fixture = TestBed.createComponent(AdminPaymentRejectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
