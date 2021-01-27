import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/Users';
import { Userservice } from '../services/user.service';

@Component({
  selector: 'user-app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() updateUser: User;
  userId: number;
  userFormObject: User;
  myForm1: FormGroup;
  myForm2: FormGroup;
  myForm3: FormGroup;
  userList: User[];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: Userservice,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {
    // Gathering Non Nested Values
    this.myForm1 = this.fb.group({
      name: [this.updateUser.name, Validators.required],
      username: [
        this.updateUser.username,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ],
      ],
      email: [this.updateUser.email, [Validators.required, Validators.email]],
      phone: [
        this.updateUser.phone,
        [Validators.required, Validators.maxLength(10)],
      ],
      website: [this.updateUser.website, Validators.required],
    });

    // Gathering Address Values
    this.myForm2 = this.fb.group({
      street: [this.updateUser.address.street, Validators.required],
      suite: [
        this.updateUser.address.suite,
        [Validators.required, Validators.maxLength(4)],
      ],
      city: [this.updateUser.address.city, Validators.required],
      zipcode: [
        this.updateUser.address.zipcode,
        [Validators.required, Validators.maxLength(5)],
      ],
      Geo: {
        lat: '',
        lng: '',
      },
    });

    // Gathering Company Values
    this.myForm3 = this.fb.group({
      companyName: [this.updateUser.company.name, Validators.required],
      catchPhrase: [this.updateUser.company.catchPhrase, Validators.required],
      bs: [this.updateUser.company.bs, Validators.required],
    });
  }

  get id() {
    return this.updateUser.id;
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

  updateUserInfo() {
    if (
      this.myForm1.status === 'VALID' &&
      this.myForm2.status === 'VALID' &&
      this.myForm3.status === 'VALID'
    ) {
      this.userFormObject = {
        id: this.id,
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
      this.userService.updateUser(this.userFormObject).subscribe((response) => {
        console.log(response);
      });
      this.activeModal.close();
      location.reload();
    }
  }
}
