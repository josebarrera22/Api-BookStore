import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { } // Inyecciónes.
  public email: string = ''; // Propiedad pública para trabajar con el email.
  public password: string = ''; // Propiedad pública para trabajar con el password.
  ngOnInit() {
  }

  onLogin(): void { // Método de loggeo clásico donde colocaremos nuestro email y contraseña.
    this.authService.loginEmailUser(this.email, this.password) // Llamamos al método de auth.service.ts
      .then((res) => {
        this.onLoginRedirect(); // Redireccionamiento a el listado de libros.
      }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(): void { // Método de loggeo correspondiente a Google.
    this.authService.loginGoogleUser() // Llamado al método de auth.service.ts
      .then((res) => {
        this.onLoginRedirect(); // Redireccionamiento a el listado de libros.
      }).catch(err => console.log('err', err.message));
  }
  onLoginFacebook(): void { // Método correspondiente a el loggeo con Facebook.
    this.authService.loginFacebookUser() // Llamado al método de auth.service.ts
      .then((res) => {
        this.onLoginRedirect(); // Redireccionamiento a el listado de libros.
      }).catch(err => console.log('err', err.message));
  }

  onLogout() { // Método para desloggearnos.
    this.authService.logoutUser(); // Llamado al método de auth.service.ts
  }
  onLoginRedirect(): void { // Método para redireccionarnos.
    this.router.navigate(['admin/list-books']); // Al listado de libros...
  }
}