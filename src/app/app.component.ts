import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CuestionarioLogin';
  isAuthenticated = false;
  isMenuOpen = false;

  ngOnInit(): void {
    // Configuración inicial
    sessionStorage.setItem('baseUrl', 'https://localhost:44321/api/v1');
    this.isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
  }

  login(): void {
    this.isAuthenticated = true;
    sessionStorage.setItem('isAuthenticated', 'true');
  }

  logout(): void {
    this.isAuthenticated = false;
    sessionStorage.setItem('isAuthenticated', 'false');
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
