import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { adminService } from 'src/app/services/admin-service';
@Component({
  selector: 'app-admin-user-pending-list',
  templateUrl: './admin-user-pending-list.component.html',
  styleUrls: ['./admin-user-pending-list.component.css'],
})
export class AdminUserPendingListComponent implements OnInit {
  usersData: any[] = [];
  baseUrl = 'https://goldenfuturelife.com';

  constructor(private adminService: adminService) {}

  ngOnInit(): void {
    this.fetchUsersByStatus('PENDING');
  }

  fetchUsersByStatus(status: any) {
    this.adminService.fetchUsersListByStatus(status).subscribe({
      next: (response) => {
        this.usersData = response.userData;
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
      },
      complete: () => {},
    });
  }

  updateUserStatusById(userId: any, status: any) {
    const userData = { id: userId, status: status };
    this.adminService.updateUserStatusById(userData).subscribe({
      next: (response) => {
        if (!response.emailVerified) {
          alert(response.message);
        }
        console.log(response.message);
        this.fetchUsersByStatus('PENDING');
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
      },
      complete: () => {},
    });
  }

  getPaymentScreenshotUrl(fileName: string): string {
    return `${this.baseUrl}/${fileName}`;
  }
}
