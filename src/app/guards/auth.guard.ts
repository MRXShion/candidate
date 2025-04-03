import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService();
  const router = new Router();

  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(['/']);
  return false;
};