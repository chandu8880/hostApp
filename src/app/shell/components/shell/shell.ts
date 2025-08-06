import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppService, User } from '../../../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shell',
  imports: [RouterModule,CommonModule],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
  encapsulation: ViewEncapsulation.None

})
export class Shell implements OnInit {
  currentUser: User | null = null;
  constructor(private router: Router, private appService: AppService) {

  }
  ngOnInit(): void {
    this.appService.currentUser$.subscribe(user => {
      this.currentUser = user ?? null;
      if (!this.currentUser) {
        this.router.navigate(['/login']);
      }
    });
  }


  loutOut() {
    this.appService.setCurrentUser(null);
    this.router.navigate(['/login']);
  }
}
