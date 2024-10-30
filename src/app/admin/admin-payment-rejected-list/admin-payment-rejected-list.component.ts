import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-admin-payment-rejected-list',
  templateUrl: './admin-payment-rejected-list.component.html',
  styleUrls: ['./admin-payment-rejected-list.component.css'],
})
export class AdminPaymentRejectedListComponent implements OnInit {
  paymentData: any[] = [];

  constructor(private adminService: adminService) {}

  ngOnInit(): void {
    this.fetchPaymentDataByStatus('REJECTED');
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
}
