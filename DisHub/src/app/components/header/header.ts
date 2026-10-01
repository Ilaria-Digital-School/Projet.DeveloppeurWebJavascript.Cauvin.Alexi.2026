import { Component, inject } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  menuOuvert = false;

  toggleMenu(): void {
    this.menuOuvert = !this.menuOuvert;
  }

  fermerMenu(): void {
    this.menuOuvert = false;
  }

  private AuthService = inject(AuthService);

  private router = inject(Router);

  getConnectedUser() {
    const user = JSON.parse(localStorage.getItem('connectUser') || 'null');
    return user;
  }

  logoutUser() {
    const user = JSON.parse(localStorage.getItem('connectUser') || 'null');

    if (user != null) {
      localStorage.removeItem('connectUser');
      this.router.navigate(['/']);
    }

  }

}
