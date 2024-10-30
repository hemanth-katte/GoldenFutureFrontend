// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { environment } from 'src/Environment/environment';
import { reconstructFieldPath } from 'express-validator/src/field-selection';
import * as e from 'express';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  environment = environment.KARTHIK_GF;

  constructor(private http: HttpClient) {}

  createUser(formData: FormData): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/users/userSignup`;
    return this.http.post(endpoint, formData);
  }

  userLogin(userLoginData: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/users/userlogin`;
    return this.http.post(endpoint, userLoginData);
  }

  verifyEmail(otpData: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/users/verifyEmail`;
    return this.http.post(endpoint, otpData);
  }

  forgotPasswordSendOtp(sendOtpData: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/users/forgotPasswordSendOTP`;
    return this.http.post(endpoint, sendOtpData);
  }

  forgotPasswordResetPassword(resetPasswordData: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/users/forgotPasswordSetPassword`;
    return this.http.post(endpoint, resetPasswordData);
  }

  fetchUserDetails(userId: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/users/getUserById/${userId}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const requestOptions = { headers: headers };
    return this.http.get(endpoint, requestOptions);
  }

  fetchNetworkDetails(networkData: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/users/getMyNetworkConnectionBaseLevel`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    let params = new HttpParams();
    for (const key in networkData) {
      if (networkData.hasOwnProperty(key)) {
        params = params.set(key, networkData[key]);
      }
    }
    const requestOptions = { headers: headers, params: params };
    return this.http.get(endpoint, requestOptions);
  }

  fetchAccountDetails(userId: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/users/getMyTranscationRecords/${userId}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const requestOptions = { headers: headers };
    return this.http.get(endpoint, requestOptions);
  }

  fetchUserBalance(userId: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/users/getUserBalance/${userId}`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const requestOptions = { headers: headers };
    return this.http.get(endpoint, requestOptions);
  }

  postWithdrawRequest(withdrawDetails: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/users/userWithdDrawAmount`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const requestOptions = { headers: headers };
    return this.http.post(endpoint, withdrawDetails, requestOptions);
  }
}
