import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/Users';
import { Userervice } from '../services/user.service';

@Component({
  selector: 'user-app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit {
  userSelection: User;

  constructor(private userService: Userervice, private router: Router) {}

  ngOnInit() {
    this.userService.$userSelectionObservable.subscribe((userSelection) => {
      this.userSelection = userSelection;
    });
  }
  returnHome() {
    this.router.navigate(['http://localhost:4200/home']);
  }
}
