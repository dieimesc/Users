import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../../models/user';

const AUTH_API = environment.API;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

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
 // https://localhost:7221/users/login

  //método pra registrar o usuário (não implementado no backend)
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
