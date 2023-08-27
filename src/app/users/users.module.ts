import { UserFormComponent } from './../user-form/user-form.component';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserDetalheComponent } from '../user-detalhe/user-detalhe.component';
import { AuthService } from '../shared/services/auth.service';

@NgModule({
  declarations: [UserFormComponent, UserDetalheComponent],
  imports: [ CommonModule,  RouterModule, FormsModule ],
  exports: [],
  providers: [AuthService],
})
export class UsersModule {}
