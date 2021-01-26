import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersTableComponent } from './users/users-table.component';
import { UserRegistrationFormComponent } from '../app/user-registration-form/user-registration-form.component';
import { UserInformationComponent } from './user-information/user-information.component';

const routes: Routes = [
  { path: 'home', component: UsersTableComponent },
  { path: 'user-form', component: UserRegistrationFormComponent },
  { path: 'user-selected/:id', component: UserInformationComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  UsersTableComponent,
  UserRegistrationFormComponent,
  UserInformationComponent
];
