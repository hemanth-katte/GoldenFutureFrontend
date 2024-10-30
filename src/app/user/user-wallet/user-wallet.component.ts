import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { UserService } from 'src/app/services/user-service';
import { Router } from '@angular/router';
import { response } from 'express';
import { walletAmount } from 'src/Validators/walletAmount';

@Component({
  selector: 'app-user-wallet',
  templateUrl: './user-wallet.component.html',
  styleUrls: ['./user-wallet.component.css'],
})
export class UserWalletComponent implements OnInit {
  userBalance: number = 0;
  accountItems: any[] = [];
  withdrawAmount: number = 0;
  walletForm: FormGroup; // The default Available amount

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.walletForm = this.formBuilder.group({
      availableAmount: new FormControl(''),
      withdrawAmount: new FormControl('',[Validators.required]),
    },{validator: walletAmount("availableAmount","withdrawAmount")});
   {}}

  ngOnInit(): void {
    this.fetchAccountDetails();
    this.fetchUserBalance();
  }

  fetchAccountDetails() {
    const userId = localStorage.getItem('userId');
    this.userService.fetchAccountDetails(userId).subscribe({
      next: (response) => {
        this.accountItems = response.accountData;
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
      },
      complete: () => {},
    });
  }

  fetchUserBalance() {
    const userId = localStorage.getItem('userId');
    this.userService.fetchUserBalance(userId).subscribe({
      next: (response) => {
        this.userBalance = response.balance;
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
      },
      complete: () => {},
    });
  }

  postWithdrawRequest() {
    if (this.walletForm.valid){
    const userId = localStorage.getItem('userId');
    const amount = this.withdrawAmount;

    const withdrawDetails = { id: userId, amount: amount };

    this.userService.postWithdrawRequest(withdrawDetails).subscribe({
      next: (response) => {
        console.log(response.message);
        console.log(response.transaction);
        this.fetchAccountDetails();
      },
      error: (error) => {
        console.log(error);
        console.log(error.error.message);
      },
      complete: () => {},
    });
  }
}
}
