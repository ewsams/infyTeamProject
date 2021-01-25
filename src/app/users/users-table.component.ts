import { Component, OnInit } from '@angular/core';
import { User } from '../models/Users';
import { Userervice } from '../services/user.service';

@Component({
  selector: 'user-app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: Userervice) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

  editUser(user: User) {
    return console.log(user.name);
  }
}
