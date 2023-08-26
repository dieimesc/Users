import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: User[];
  constructor(private authService: AuthService) {
     this.usuarios = authService.Usuarios;

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
