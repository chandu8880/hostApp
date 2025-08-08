// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AppService } from './app.service'; // your service that holds currentUser

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private appService: AppService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    const currentUser = this.appService.getCurrentUser(); // create a getter if you don't have one
    if (currentUser) {
      return true;
    }
    return this.router.parseUrl('/login'); // redirect to login if null
  }
}
