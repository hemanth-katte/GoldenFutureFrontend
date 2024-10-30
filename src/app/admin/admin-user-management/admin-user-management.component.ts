import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.css'],
})
export class AdminUserManagementComponent {
  button1Selected: boolean = true;
  button2Selected: boolean = false;
  button3Selected: boolean = false;
  button4Selected: boolean = false;

  toggleButton(buttonNumber: number) {
    switch (buttonNumber) {
      case 1:
        this.button1Selected = true;
        this.button2Selected = false;
        this.button3Selected = false;
        this.button4Selected = false;
        break;
      case 2:
        this.button1Selected = false;
        this.button2Selected = true;
        this.button3Selected = false;
        this.button4Selected = false;
        break;
      case 3:
        this.button1Selected = false;
        this.button2Selected = false;
        this.button3Selected = true;
        this.button4Selected = false;
        break;
      case 4:
        this.button1Selected = false;
        this.button2Selected = false;
        this.button3Selected = false;
        this.button4Selected = true;
        break;
    }
  }
}
