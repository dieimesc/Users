import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../../models/user';
import { StorageService } from './storage.service';

const AUTH_API = environment.API;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpOptionsWithAuthorization: any;
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService, private storageService: StorageService) {
    this.httpOptionsWithAuthorization = {
      headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${this.storageService.getUser().token}`)
    }
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Verifica se o token já expirou

    return !this.jwtHelper.isTokenExpired(token);
  }
  // faz o login do usuário
  login(user: User): Observable<any> {
    const body = JSON.stringify(user);
    return this.http.post(
      AUTH_API + 'login',
      user,
      httpOptions
    );
  }

  //método pra registrar(adicionar) um usuário
  register(user: User): Observable<any> {
    return this.http.post(
      AUTH_API,
      user,
      this.httpOptionsWithAuthorization
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
