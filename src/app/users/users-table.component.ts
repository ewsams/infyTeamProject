import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/Users';
import { Userervice } from '../services/user.service';

@Component({
  selector: 'user-app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  users: User[] = [];
  deleteNotification = false;
  user: User;
  constructor(private userService: Userervice, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

  editUser(user: User) {
    return console.log(user.name);
  }

  onUserInfoSelection(user: User) {
    this.router.navigate(['user-selected', user.id]);
    this.userService.getUserSelection(user);
    console.log(user);
  }

  deleteWarning(user: User) {
    this.user = user;
    this.deleteNotification = true;
    window.scrollTo(0, 0);
  }
  deleteUser() {
    this.userService.deleteUser(this.user).subscribe((response) => {
      console.log(response);
      location.reload();
    });
  }
}
