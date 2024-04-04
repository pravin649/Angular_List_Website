import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private authSecetKey = 'Bearer Token';

  constructor() { 
    this.isAuthenticated = !!localStorage.getItem(this.authSecetKey);
  }

  login(username: string,password: string): boolean {
    if (username === 'Jaydeep Patil' && password === 'Pass@123') {
      const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpheWRlZXAgUGF0aWwiLCJpYXQiOjE1MTYyMzkwMjJ9.yt3EOXf60R62Mef2oFpbFh2ihkP5qZ4fM8bjVnF8YhA';
      localStorage.setItem(this.authSecetKey, authToken);
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

    isAuthenticatedUser(): boolean {
      return this.isAuthenticated;
    }

    logout(): void {
      localStorage.removeItem(this.authSecetKey);
      this.isAuthenticated = false;
    }
}
