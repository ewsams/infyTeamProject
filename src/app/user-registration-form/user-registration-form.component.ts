import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/Users';
import { Userervice } from '../services/user.service';

@Component({
  selector: 'user-app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  userFormObject: User;
  myForm: FormGroup;
  id: number;
  constructor(private fb: FormBuilder, private userService: Userervice) {}

  onSubmit() {
    if (this.myForm.status === 'VALID') {
      this.userFormObject = {
        id: this.createId(),
        name: this.name.value,
        username: this.username.value,
        email: this.email.value,
        address: this.address.value,
        phone: this.phone.value,
        website: this.website.value,
        company: this.company.value,
      };
      console.log(this.userFormObject);
      this.userService.addUser(this.userFormObject);
    }
  }

  ngOnInit() {
    // form for database
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      website: ['', Validators.required],
      company: ['', Validators.required],
    });
  }
  // Getters for working with our form
  get name() {
    return this.myForm.get('name');
  }
  get username() {
    return this.myForm.get('username');
  }
  get password() {
    return this.myForm.get('password');
  }

  get email() {
    return this.myForm.get('email');
  }
  get address() {
    return this.myForm.get('address');
  }
  get company() {
    return this.myForm.get('company');
  }
  get website() {
    return this.myForm.get('website');
  }
  get phone() {
    return this.myForm.get('phone');
  }

  createId(): number {
    this.userService.getUsers().subscribe((userList) => {
      this.id = userList.length + 1;
    });
    return this.id;
  }
}
