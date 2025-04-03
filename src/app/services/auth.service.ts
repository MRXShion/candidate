import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private mockUser = [{
    email: 'test@example.com',
    password: 'test123' },
  {
    email: 'admin@example.com',
    password: 'admin123' },
  {
    email: 'user@example.com',
    password: 'user123' },
  ];

  login(email: string, password: string): boolean {
    if (this.mockUser.some(user => user.email === email && user.password === password)) {
      this.isAuthenticated = true;
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}