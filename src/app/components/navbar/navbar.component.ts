import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { } // Inyección.
  public app_name: string = 'BookStore'; // Propiedad que hace referencia al nombre de nuestra app en el Navbar.
  public isLogged: boolean = false; // Propiedad utilizada para saber si el usuario está o no loggeado.
  ngOnInit() {
    this.getCurrentUser(); // Mostrar luego de inicializado el componente de si estamos loggeados o no.
  }

  getCurrentUser() { // Método para indicarnos si estamos o no loggeados.
   this.authService.isAuth().subscribe(auth => { // Llamamos al método correspondiente de auth.service.ts
     if (auth) {
       console.log('user logged');
       this.isLogged = true;
     } else {
       console.log('user not logged');
       this.isLogged = false;
     }
   });
  }

  onLogout() { // Método para que cuando estemos loggeados poder desloggearnos.
    this.afsAuth.auth.signOut(); // Método que nos brinda AngularFireAuth para poder desloggearnos.
  }

}
