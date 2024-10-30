import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-admin-payment-accepted-list',
  templateUrl: './admin-payment-accepted-list.component.html',
  styleUrls: ['./admin-payment-accepted-list.component.css'],
})
export class AdminPaymentAcceptedListComponent implements OnInit {
  paymentData: any[] = [];

  constructor(private adminService: adminService) {}

  ngOnInit(): void {
    this.fetchPaymentDataByStatus('ACCEPTED');
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
