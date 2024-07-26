import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/auth/login.service';
import { AuthService } from '../../service/auth/auth.service';
import { Personalogin } from 'src/app/model/personaLogin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginErrorSwitch: boolean = false;
  loginError: string = '';
  formLogin: FormGroup;

  constructor(private form: FormBuilder, private loginService: LoginService, private router: Router, private _authService: AuthService)
  {
    this.formLogin = this.form.group({
      Correo: ['', [Validators.required, Validators.email]],
      Contrasenna: ['', Validators.required]
    })
    
  }

  login() {
    if (this.formLogin.valid) {
      const credenciales: Personalogin = this.formLogin.value;
      console.log(credenciales);
      this.loginService.verificarCredenciales(credenciales).subscribe({
        next: (usuario: Personalogin) => {
          this.router.navigate(['/home']);
          this._authService.auth = true;
        },
        error: (error) => {
          console.error(error);
          this.loginError = 'Error: algo no está bien, intenta de nuevo.';
          this.loginErrorSwitch = true;
        }
      });
    }
    else {
      this.formLogin.markAllAsTouched();
    }
  }

  hasErrors( controlName: string, errorType: string){
    return this.formLogin.get(controlName)?.hasError(errorType) && this.formLogin.get(controlName)?.touched;
  }
}
