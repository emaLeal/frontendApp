import { Inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const authService = Inject(AuthService);
  return false;
};
