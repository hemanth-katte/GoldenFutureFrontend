import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user-service';
import { Router } from '@angular/router';
import { response } from 'express';
import { passwordMatch } from 'src/Validators/passwordMatch';

@Component({
  selector: 'app-user-forgotpassword',
  templateUrl: './user-forgotpassword.component.html',
  styleUrls: ['./user-forgotpassword.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', animate(300)),
    ]),
  ],
})
export class UserForgotpasswordComponent {
  forgotPasswordResetForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.forgotPasswordResetForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      enteredOtp: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}$/)]),
      password: new FormControl('',Validators.required),
      enteredPassword: new FormControl('', [Validators.required,Validators.maxLength(20)]),
    },{validator: passwordMatch("password","enteredPassword")});
  }

  ngOnInit(): void {}

  onSendOtp() {
    const enteredEmail: string =
      this.forgotPasswordResetForm.controls['email'].value;
    const sendOtpData = { email: enteredEmail };

    this.userService.forgotPasswordSendOtp(sendOtpData).subscribe({
      next: (response) => {
        alert(`${response.message}`);
      },
      error: (error) => {
        console.log(error.error.message);
        console.log(error);
      },
      complete: () => {},
    });
  }

  onResetPassword() {
    if (this.forgotPasswordResetForm.valid) { 
    const Otp: string =
      this.forgotPasswordResetForm.controls['enteredOtp'].value;
    const newPassword: string =
      this.forgotPasswordResetForm.controls['enteredPassword'].value;
    const Email: string = this.forgotPasswordResetForm.controls['email'].value;
    const resetPasswordData = { email: Email, otp: Otp, password: newPassword };

    this.userService.forgotPasswordResetPassword(resetPasswordData).subscribe({
      next: (response) => {
        alert(`${response.message}`);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log(error.error.message);
        console.log(error);
      },
      complete: () => {},
    });
  }
  }
}
