import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-user-payment',
  templateUrl: './admin-user-payment.component.html',
  styleUrls: ['./admin-user-payment.component.css']
})
export class AdminUserPaymentComponent {
  button1Selected: boolean = true;
  button2Selected: boolean = false;
  button3Selected: boolean = false;

  toggleButton(buttonNumber: number) {
    switch (buttonNumber) {
      case 1:
        this.button1Selected = true;
        this.button2Selected = false;
        this.button3Selected = false;
        break;
      case 2:
        this.button1Selected = false;
        this.button2Selected = true;
        this.button3Selected = false;
        break;
      case 3:
        this.button1Selected = false;
        this.button2Selected = false;
        this.button3Selected = true;
        break;
    }
  }
}
