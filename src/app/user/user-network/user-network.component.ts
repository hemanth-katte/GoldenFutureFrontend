import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-user-network',
  templateUrl: './user-network.component.html',
  styleUrls: ['./user-network.component.css'],
})
export class UserNetworkComponent implements OnInit {
  level: number = 0;
  networkItems: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.level = +params['level'];
    });
    this.fetchNetworkData();
  }

  fetchNetworkData() {
    const userId = localStorage.getItem('userId');
    const networkLevel = this.level;

    const networkData = { id: userId, networkLevel: networkLevel };

    this.userService.fetchNetworkDetails(networkData).subscribe({
      next: (response) => {
        this.networkItems = response.networkItems;
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
      },
      complete: () => {},
    });
  }
}
