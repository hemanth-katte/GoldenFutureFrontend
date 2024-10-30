import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { FormsModule } from '@angular/forms';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserWalletComponent } from './user/user-wallet/user-wallet.component';
import { UserMyprofileComponent } from './user/user-myprofile/user-myprofile.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminUserManagementComponent } from './admin/admin-user-management/admin-user-management.component';
import { AdminUserPaymentComponent } from './admin/admin-user-payment/admin-user-payment.component';
import { AdminUserPendingListComponent } from './admin/admin-user-pending-list/admin-user-pending-list.component';
import { AdminUserAcceptedListComponent } from './admin/admin-user-accepted-list/admin-user-accepted-list.component';
import { AdminUserRejectedListComponent } from './admin/admin-user-rejected-list/admin-user-rejected-list.component';
import { AdminPaymentAcceptedListComponent } from './admin/admin-payment-accepted-list/admin-payment-accepted-list.component';
import { AdminPaymentPendingListComponent } from './admin/admin-payment-pending-list/admin-payment-pending-list.component';
import { AdminPaymentRejectedListComponent } from './admin/admin-payment-rejected-list/admin-payment-rejected-list.component';
import { UserNetworkComponent } from './user/user-network/user-network.component';
import { UserForgotpasswordComponent } from './user/user-forgotpassword/user-forgotpassword.component';
import { UserEnterotpComponent } from './user/user-enterotp/user-enterotp.component';
import { AdminUserSelectdaterangeComponent } from './admin/admin-user-selectdaterange/admin-user-selectdaterange.component';
import { UserDecisionComponent } from './user/user-decision/user-decision.component'; // Import this line
import { AdminAuthService } from 'src/Middlewares/adminAuthentication.service';
import { userAuthService } from 'src/Middlewares/userAuthentication.service';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserHomeComponent,
    UserWalletComponent,
    UserMyprofileComponent,
    UserNavbarComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminUserManagementComponent,
    AdminUserPaymentComponent,
    AdminUserAcceptedListComponent,
    AdminUserRejectedListComponent,
    AdminUserPendingListComponent,
    AdminPaymentAcceptedListComponent,
    AdminPaymentPendingListComponent,
    AdminPaymentRejectedListComponent,
    UserNetworkComponent,
    UserForgotpasswordComponent,
    UserEnterotpComponent,
    AdminUserSelectdaterangeComponent,
    UserDecisionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AdminAuthService, userAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
