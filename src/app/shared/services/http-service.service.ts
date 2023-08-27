import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = `${environment.API}users`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<User[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  getTodos(): Observable<any> {
    return this.http.get(this.API, { responseType: 'text' });
  }

  loadByID(id: any) {
    return this.http.get<User>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(user: User) {
    return this.http.post(this.API, user).pipe(take(1));
  }

  private update(user: User) {
    return this.http.put(`${this.API}/${user.id}`, user).pipe(take(1));
  }

  save(user: User) {
    if (user.id) {
      return this.update(user);
    }
    return this.create(user);
  }

  remove(id: any) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
