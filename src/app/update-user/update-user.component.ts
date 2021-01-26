import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/Users';
import { Userservice } from '../services/user.service';

@Component({
  selector: 'user-app-update-user',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Update {{ user.name }}</h4>
      <button
        type="button"
        class="close"
        style="outline: none;"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <user-app-user-form [updateUser]="user"></user-app-user-form>
    </div>
  `,
  styleUrls: ['./update-user.component.scss'],
})
export class NgbdModalContentComponent {
  @Input() user: User;

  constructor(
    public activeModal: NgbActiveModal,
    private userService: Userservice
  ) {}
}

@Component({
  selector: 'user-app-ngbd-modal-component',
  template: ` <button
    (click)="open()"
    class="btn btn-success"
    style="width: 90%"
  >
    update user
  </button>`,
})
export class UpdateUserComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @Input() user: User;

  ngOnInit() {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContentComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.user = this.user;
  }
}
