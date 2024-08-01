import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CuestionarioLogin';
  isAuthenticated =
    sessionStorage.getItem('isAuthenticated')?.toString() == 'true';

  ngOnInit(): void {
    sessionStorage.setItem('baseUrl', 'https://localhost:44321/api/v1');
    sessionStorage.setItem('isAuthenticated', 'false');
  }
}
