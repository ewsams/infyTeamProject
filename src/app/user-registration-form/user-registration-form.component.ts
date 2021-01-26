import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/Users';
import { Userservice } from '../services/user.service';

@Component({
  selector: 'user-app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  userId: number;
  userFormObject: User;
  myForm1: FormGroup;
  myForm2: FormGroup;
  myForm3: FormGroup;
  userList: User[];
  constructor(
    private fb: FormBuilder,
    private userService: Userservice,
    private router: Router
  ) {}

  onSubmit() {
    if (
      this.myForm1.status === 'VALID' &&
      this.myForm2.status === 'VALID' &&
      this.myForm3.status === 'VALID'
    ) {
      this.userFormObject = {
        id: this.userId,
        name: this.name.value,
        username: this.username.value,
        email: this.email.value,
        phone: this.phone.value,
        website: this.website.value,
        address: {
          street: this.street.value,
          suite: this.suite.value,
          city: this.city.value,
          zipcode: this.zipcode.value,
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
        company: {
          name: this.companyName.value,
          catchPhrase: this.catchPhrase.value,
          bs: this.bs.value,
        },
      };
      console.log(this.userFormObject);
      this.userService.addUser(this.userFormObject).subscribe((response) => {
        console.log(response);
      });
      console.log(this.userList);
      this.router.navigate(['http://localhost:4200/home']);
    }
  }

  ngOnInit() {
    this.createId();
    // Gathering Non Nested Values
    this.myForm1 = this.fb.group({
      name: ['', Validators.required],
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      website: ['', Validators.required],
    });

    // Gathering Address Values
    this.myForm2 = this.fb.group({
      street: ['', Validators.required],
      suite: ['', [Validators.required, Validators.maxLength(4)]],
      city: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.maxLength(5)]],
      Geo: {
        lat: '',
        lng: '',
      },
    });

    // Gathering Company Values
    this.myForm3 = this.fb.group({
      companyName: ['', Validators.required],
      catchPhrase: ['', Validators.required],
      bs: ['', Validators.required],
    });
  }

  // Getters for working with our Form1
  get name() {
    return this.myForm1.get('name');
  }
  get username() {
    return this.myForm1.get('username');
  }

  get website() {
    return this.myForm1.get('website');
  }
  get phone() {
    return this.myForm1.get('phone');
  }
  get email() {
    return this.myForm1.get('email');
  }

  // Getters for working with our Form2
  get street() {
    return this.myForm2.get('street');
  }
  get suite() {
    return this.myForm2.get('suite');
  }
  get zipcode() {
    return this.myForm2.get('zipcode');
  }
  get city() {
    return this.myForm2.get('city');
  }

  // Getters for working with our Form3
  get companyName() {
    return this.myForm3.get('companyName');
  }
  get catchPhrase() {
    return this.myForm3.get('catchPhrase');
  }
  get bs() {
    return this.myForm3.get('bs');
  }

  createId() {
    this.userService.getUsers().subscribe((userList) => {
      this.userId = userList.length + Math.floor(Math.random() * 100);
      this.userList = userList;
    });
  }
}
