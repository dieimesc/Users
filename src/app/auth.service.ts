import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: User){
    if(usuario.login === 'usuario@email.com' &&
      usuario.password === '123456'){
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/']);
      }
      else{
        this.usuarioAutenticado = false;
      }
  }
  UsuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
  get Usuarios(): User[] {
    return [];
  }

}
