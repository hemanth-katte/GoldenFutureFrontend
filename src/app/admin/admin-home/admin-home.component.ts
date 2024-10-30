import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AdminAuthService } from 'src/Middlewares/adminAuthentication.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent {
  constructor(public authService: AdminAuthService, private router: Router) {}

  showLoginAlert() {
    const isUserLoggedIn = this.authService.isLoggedInUser();

    if (!isUserLoggedIn) {
      const confirmLogin = window.confirm(
        'Please log in to access this content. Do you want to log in now?'
      );

      if (confirmLogin) {
        // Redirect to login page
        this.router.navigate(['/adminLogin']);
      }
    }
  }
}
