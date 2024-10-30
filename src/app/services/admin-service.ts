import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { User } from '../models/User';
import { environment } from 'src/Environment/environment';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class adminService {
  constructor(private http: HttpClient) {}

  // Create a new user
  // createUser(user: User): Observable<User> {
  //   return this.http.post<User>(this.apiUrl, user);
  // }

  adminLogin(loginData: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/admins/adminlogin`;
    return this.http.post(endpoint, loginData);
  }

  fetchUsersListByStatus(status: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/admins/getAllUsersByStatus/${status}`;
    const token = localStorage.getItem('adminToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const requestOptions = { headers: headers };
    return this.http.get(endpoint, requestOptions);
  }

  fetchPaymentDataByStatus(status: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/admins/getAllPaymentsByStatus/${status}`;
    const token = localStorage.getItem('adminToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const requestOptions = { headers: headers };
    return this.http.get(endpoint, requestOptions);
  }

  updatePaymentStatusById(accountData: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/admins/updatePaymentsStatusByID/`;
    const token = localStorage.getItem('adminToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const requestOptions = { headers: headers };
    return this.http.put(endpoint, accountData, requestOptions);
  }

  updateUserStatusById(userData: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/admins/updateUsersStatusByID/`;
    const token = localStorage.getItem('adminToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const requestOptions = { headers: headers };
    return this.http.put(endpoint, userData, requestOptions);
  }

  downloadUserDataByDate(dateRange: any): Observable<any> {
    const endpoint = `${environment.KARTHIK_GF}/api/admins/downloadUserData?fromDate=${dateRange.fromDate}&toDate=${dateRange.toDate}`;
    const token = localStorage.getItem('adminToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    const requestOptions = { headers: headers, responseType: 'blob' as 'json' };
    return this.http.get(endpoint, requestOptions).pipe(
      map((response: any) => {
        saveAs(
          response,
          `goldenFuture_${dateRange.fromDate}to${dateRange.toDate}.xlxs`
        );
        return { success: true }; // Optional: Return any success data if needed
      }),
      catchError((error) => {
        console.error('Error downloading Excel file:', error);
        throw error;
      })
    );
  }
}
