import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router) {
  }

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> | boolean {

    const usuarioEstaAutenticado = this.authService.isAuthenticated;

    if (!usuarioEstaAutenticado) {

      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}



