import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppService, User } from '../../../app.service';

@Component({
  selector: 'app-users-lists',
  imports: [CommonModule],
  templateUrl: './users-lists.html',
  styleUrl: './users-lists.scss'
})
export class UsersLists implements OnInit {
  users: User[] = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.users$.subscribe(users => {
      this.users = users;
    });
  }

}
