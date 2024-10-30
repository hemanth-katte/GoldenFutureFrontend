import { Component, OnInit } from '@angular/core';
import { adminService } from 'src/app/services/admin-service';
@Component({
  selector: 'app-admin-user-accepted-list',
  templateUrl: './admin-user-accepted-list.component.html',
  styleUrls: ['./admin-user-accepted-list.component.css'],
})
export class AdminUserAcceptedListComponent implements OnInit {
  usersData: any[] = [];
  baseUrl = 'https://goldenfuturelife.com';

  constructor(private adminService: adminService) {}

  ngOnInit(): void {
    this.fetchUsersByStatus('ACCEPTED');
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
