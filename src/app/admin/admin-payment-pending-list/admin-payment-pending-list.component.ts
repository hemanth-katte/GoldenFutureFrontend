import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/services/admin-service';
@Component({
  selector: 'app-admin-payment-pending-list',
  templateUrl: './admin-payment-pending-list.component.html',
  styleUrls: ['./admin-payment-pending-list.component.css'],
})
export class AdminPaymentPendingListComponent implements OnInit {
  paymentData: any[] = [];

  constructor(private adminService: adminService) {}

  ngOnInit(): void {
    this.fetchPaymentDataByStatus('PENDING');
  }

  fetchPaymentDataByStatus(status: any) {
    this.adminService.fetchPaymentDataByStatus(status).subscribe({
      next: (response) => {
        this.paymentData = response.userPayments;
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
      },
      complete: () => {},
    });
  }

  updatePaymentStatusById(accountId: any, status: any) {
    const userId = localStorage.getItem('userId');
    const paymentData = { userId: userId, id: accountId, status: status };
    this.adminService.updatePaymentStatusById(paymentData).subscribe({
      next: (response) => {
        console.log(response.message);
        this.fetchPaymentDataByStatus('PENDING');
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
      },
      complete: () => {},
    });
  }

  isButtonDisabled(requestedAmount: number, balanceAmount: number): boolean {
    return requestedAmount > balanceAmount;
  }
}
