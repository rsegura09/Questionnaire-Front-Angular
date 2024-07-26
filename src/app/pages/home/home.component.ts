import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auth: boolean = false;

  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    this.auth = this.authService.auth;
  }

}
