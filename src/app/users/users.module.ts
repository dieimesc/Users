import { UserFormComponent } from './../user-form/user-form.component';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserDetalheComponent } from '../user-detalhe/user-detalhe.component';

@NgModule({
  declarations: [UsersComponent, UserFormComponent, UserDetalheComponent],
  imports: [ CommonModule,  RouterModule, FormsModule ],
  exports: [],
  providers: [AuthService],
})
export class UsersModule {}
