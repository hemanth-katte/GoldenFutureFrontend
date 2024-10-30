import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserPaymentComponent } from './admin-user-payment.component';

describe('AdminUserPaymentComponent', () => {
  let component: AdminUserPaymentComponent;
  let fixture: ComponentFixture<AdminUserPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserPaymentComponent]
    });
    fixture = TestBed.createComponent(AdminUserPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
