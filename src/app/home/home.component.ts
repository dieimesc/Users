import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/http-service.service';
import { User } from '../models/user';
import { StorageService } from '../shared/services/storage.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authenticatedUser$: Observable<User>;
  token: string;

  constructor(private userService: UserService, private storageService: StorageService) {
    this.token = this.storageService.getUser().token;
    this.authenticatedUser$ = userService.loadByToken(this.token);
  }

  ngOnInit(): void {

  };
}
