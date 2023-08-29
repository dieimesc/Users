import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = environment.API;
  header: any;


  constructor(private http: HttpClient, private storageService: StorageService) {
    this.header = {
      headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${this.storageService.getUser().token}`)
    }
  }


  getTodos(): Observable<any> {
    return this.http.get(this.API, { responseType: 'text' });
  }

  getUserByToken (token: string): Observable<any> {
    return this.http.get(`${this.API}me/?token=${token}`, this.header );
  }

  loadByToken(token: string): Observable<any> {
    return this.http.get<User>(`${this.API}/me/${token}`, this.header);
  }

  private create(user: User) {
    return this.http.post(this.API, user).pipe(take(1));
  }

  private update(user: User) {
    return this.http.put(`${this.API}/${user.id}`, user).pipe(take(1));
  }
}
