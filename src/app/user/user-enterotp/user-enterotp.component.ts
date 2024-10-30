import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-enterotp',
  templateUrl: './user-enterotp.component.html',
  styleUrls: ['./user-enterotp.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', animate(300)),
    ]),
  ],
})
export class UserEnterotpComponent implements OnInit {
  otpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.otpForm = this.formBuilder.group({
      enteredOtp: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {}

  onOtpFormSubmit() {
    const otp: string = this.otpForm.controls['enteredOtp'].value;
    const email = localStorage.getItem('userEmail');

    const otpData = { otp, email };

    const subscription = this.userService.verifyEmail(otpData).subscribe({
      next: (response) => {
        if (response.success) {
          alert('Email verification successful, please login');
          this.router.navigate(['/login']);
        } else {
          alert(`${response.message}`);
        }
      },
      error: (error) => {
        console.error('Error while user entering OTP, please try again', error);
        console.log(error);
      },
      complete: () => {
        // Handle completion if needed
      },
    });
  }
}
