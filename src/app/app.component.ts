import { Component } from '@angular/core';
import { StorageService } from './shared/services/storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { EventBusService } from './shared/services/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Usuários';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    // Verifica se está logado
    if (this.isLoggedIn) {
      // pega o usuário da sessão
      const user = this.storageService.getUser();
      //seta as regras
      this.roles = user.roles;

      // seta o nome
      this.username = user.username;
    }


    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
