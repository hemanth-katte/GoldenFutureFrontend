import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserWalletComponent } from './user/user-wallet/user-wallet.component';
import { UserMyprofileComponent } from './user/user-myprofile/user-myprofile.component';
import { UserNetworkComponent } from './user/user-network/user-network.component';
import { UserForgotpasswordComponent } from './user/user-forgotpassword/user-forgotpassword.component';
import { UserEnterotpComponent } from './user/user-enterotp/user-enterotp.component';
import { UserDecisionComponent } from './user/user-decision/user-decision.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminUserManagementComponent } from './admin/admin-user-management/admin-user-management.component';
import { AdminUserPaymentComponent } from './admin/admin-user-payment/admin-user-payment.component';
import { AdminAuthGuard } from '../Middlewares/adminAuthGaurd.service';
import { UserAuthGuard } from '../Middlewares/userAuthGaurd.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'userSignUp', component: UserSignupComponent },
  {
    path: 'userHome',
    component: UserHomeComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'userWallet',
    component: UserWalletComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'userMyprofile',
    component: UserMyprofileComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'userNetwork',
    component: UserNetworkComponent,
    canActivate: [UserAuthGuard],
  },
  {
    path: 'userNetwork/:level',
    component: UserNetworkComponent,
    canActivate: [UserAuthGuard],
  },
  { path: 'userForgotPassword', component: UserForgotpasswordComponent },
  { path: 'userEnterotp', component: UserEnterotpComponent },
  { path: 'userDecision', component: UserDecisionComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  {
    path: 'adminHome',
    component: AdminHomeComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'adminUserManagementComponent',
    component: AdminUserManagementComponent,
    canActivate: [AdminAuthGuard],
  },
  {
    path: 'adminUserPaymentComponent',
    component: AdminUserPaymentComponent,
    canActivate: [AdminAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
