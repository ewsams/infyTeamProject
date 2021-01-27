import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Userservice } from '../services/user.service';
import { routingComponents } from '../app-routing.module';
import { SearchfilterPipe } from '../searchfilter.pipe';

@NgModule({
  declarations: [routingComponents, SearchfilterPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [routingComponents],
  providers: [Userservice],
})
export class UsersModule {}
