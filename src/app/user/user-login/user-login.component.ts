import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { UserService } from '../../services/user-service';
//import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', animate(300)),
    ]),
  ],
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      phonenumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      password: new FormControl('', [Validators.required,Validators.maxLength(20)]),
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const phonenumber = this.loginForm.controls['phonenumber'].value;
      const password = this.loginForm.controls['password'].value;

      const loginData = { phonenumber, password };

      const subscription = this.userService.userLogin(loginData).subscribe({
        next: (response) => {
          if (response.emailVerified === false) {
            localStorage.setItem('email', response.email);
            this.router.navigate(['/userEnterotp']);
            alert(`${response.message}`);
          } else if (response.adminVerified == false) {
            alert(`${response.message}`);
          } else {
            localStorage.setItem('token', response.token);
            localStorage.setItem('userId', response.userId);
            localStorage.setItem('email', response.email);
            this.router.navigate(['/userHome']);
          }
        },
        error: (error) => {
          console.error('Error while user login', error);
          console.log(error);
          if (error.error && error.error.message === 'Invalid credentials') {
            alert(
              'Invalid credentials please enter valid username and password'
            );
          }
        },
        complete: () => {},
      });
    }
  }
}
