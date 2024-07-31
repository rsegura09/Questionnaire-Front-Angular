// home.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { UserResponse } from 'src/app/model/personaLogin.model';
import { HomeService } from 'src/app/service/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId: string | null = null;
  userInfo: UserResponse['value'] | null = null;
  isAuthenticated: boolean = false;

  constructor(private homeService: HomeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userId = this.authService.Id; // Obtén el ID del usuario del servicio de autenticación
    if (this.userId) {
      this.homeService.getUserInfo(this.userId).subscribe({
        next: (response: UserResponse) => {
          this.userInfo = response.value;
          this.isAuthenticated = response.success;
        },
        error: (error) => {
          console.error('Error al obtener información del usuario:', error);
          this.isAuthenticated = false;
        }
      });
    }
  }
}
