import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/services/admin-service';
@Component({
  selector: 'app-admin-user-rejected-list',
  templateUrl: './admin-user-rejected-list.component.html',
  styleUrls: ['./admin-user-rejected-list.component.css'],
})
export class AdminUserRejectedListComponent implements OnInit {
  usersData: any[] = [];
  baseUrl = 'https://goldenfuturelife.com';

  constructor(private adminService: adminService) {}

  ngOnInit(): void {
    this.fetchUsersByStatus('REJECTED');
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
  getPaymentScreenshotUrl(fileName: string): string {
    return `${this.baseUrl}/${fileName}`;
  }
}
