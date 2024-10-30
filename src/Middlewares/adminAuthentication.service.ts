// authentication.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthService {
  private tokenKey = 'adminToken';
  private isLoggedIn = false;

  constructor() {
    this.isLoggedIn = !!localStorage.getItem(this.tokenKey);
  }

  login(token: string) {
    localStorage.setItem(this.tokenKey, token);
    this.isLoggedIn = true;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn = false;
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }
}
