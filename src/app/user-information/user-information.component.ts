import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/Users';
import { Userservice } from '../services/user.service';

@Component({
  selector: 'user-app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit {
  userSelection: User;

  constructor(private userService: Userservice, private router: Router) {}

  ngOnInit() {
    this.userService.$userSelectionObservable.subscribe((userSelection) => {
      this.userSelection = userSelection;
      if (this.userSelection === null) {
        this.returnHome();
      }
    });
  }
  returnHome() {
    this.router.navigate(['http://localhost:4200/home']);
  }
}
