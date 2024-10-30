import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPaymentAcceptedListComponent } from './admin-payment-accepted-list.component';

describe('AdminPaymentAcceptedListComponent', () => {
  let component: AdminPaymentAcceptedListComponent;
  let fixture: ComponentFixture<AdminPaymentAcceptedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPaymentAcceptedListComponent]
    });
    fixture = TestBed.createComponent(AdminPaymentAcceptedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
