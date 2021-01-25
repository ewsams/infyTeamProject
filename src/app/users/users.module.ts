import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Userervice } from '../services/user.service';
import { routingComponents } from '../app-routing.module';

@NgModule({
  declarations: [routingComponents],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [routingComponents],
  providers: [Userervice],
})
export class UsersModule {}
