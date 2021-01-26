import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/Users';
import { Userservice } from '../services/user.service';

@Component({
  selector: 'user-app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  users: User[] = [];
  deleteNotification = false;
  user: User;
  constructor(private userService: Userservice, private router: Router) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

  editUser(user: User) {
    this.userService.getUserSelection(user);
    console.log(user);
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
