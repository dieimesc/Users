import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import {RouterModule} from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/http-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  constructor(private userService: UserService) {
    // this.usuarios$ = this.userService.list();
  }
  ngOnInit(): void {

  }


}
