import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { adminService } from 'src/app/services/admin-service';
import { AdminAuthService } from 'src/Middlewares/adminAuthentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: adminService,
    private router: Router,
    public authService: AdminAuthService
  ) {
    this.adminLoginForm = this.formBuilder.group({
      phonenumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onAdminLogin() {
    if (this.adminLoginForm.valid) {
      const phone = this.adminLoginForm.controls['phonenumber'].value;
      const password = this.adminLoginForm.controls['password'].value;

      const loginData = { phone: phone, password: password };

      this.adminService.adminLogin(loginData).subscribe({
        next: (response) => {
          if (response.success) {
            localStorage.setItem('adminToken', response.token);
            this.router.navigate(['adminHome']);
          }
        },
        error: (error) => {
          console.log(error);
          console.log(error.error.message);
          alert(error.error.message);
        },
        complete: () => {},
      });
    }
  }
}
