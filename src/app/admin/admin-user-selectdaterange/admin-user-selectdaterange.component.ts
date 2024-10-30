import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { adminService } from 'src/app/services/admin-service';

@Component({
  selector: 'app-admin-user-selectdaterange',
  templateUrl: './admin-user-selectdaterange.component.html',
  styleUrls: ['./admin-user-selectdaterange.component.css'],
})
export class AdminUserSelectdaterangeComponent implements OnInit {
  startDate: string = '';
  endDate: string = '';

  constructor(private adminService: adminService) {}

  ngOnInit(): void {}

  downloadExcelData() {
    if (this.startDate && this.endDate) {
      const dateRange = {
        fromDate: this.formatDate(this.startDate),
        toDate: this.formatDate(this.endDate),
      };
      this.adminService.downloadUserDataByDate(dateRange).subscribe({
        next: (response) => {
          if (response.success) {
            console.log('user data downloaded successfully!');
          }
        },
        error: (error) => {
          console.log(error.error.message);
        },
        complete: () => {},
      });
    }
  }

  private formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
}
