import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersTableComponent } from './users/users-table.component';
import { UserRegistrationFormComponent } from '../app/user-registration-form/user-registration-form.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NgbdModalContentComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: 'home', component: UsersTableComponent },
  { path: 'user-form', component: UserRegistrationFormComponent },
  { path: 'user-selected/:id', component: UserInformationComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  UsersTableComponent,
  UserRegistrationFormComponent,
  UserInformationComponent,
  UpdateUserComponent,
  NgbdModalContentComponent,
  UserFormComponent,
];
