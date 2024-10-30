import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  userProfileData: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUserProfileInfo();
  }

  fetchUserProfileInfo() {
    const userId: any = localStorage.getItem('userId');
    this.userService.fetchUserDetails(userId).subscribe({
      next: (response) => {
        this.userProfileData = response.userData;
        //alert(`${response.message}`);
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
      },
      complete: () => {},
    });
  }
}
