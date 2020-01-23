import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UserInterface } from '../../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { } // Inyección.
  user: UserInterface = { // Declaración e inicialización de los campos correspondientes a la interfaz UserInterface.
    name: '',
    email: '',
    photoUrl: '',
    roles: {}
  };

  public providerId: string = 'null'; // Propiedad que hará referencia a la id del usuario.
  ngOnInit() {
    this.authService.isAuth().subscribe(user => { // Suscribir...
      if (user) { // Si el usuario está autentificado.
        this.user.name = user.displayName; // Nombre del usuario (solamente si está loggeado a través de una red social).
        this.user.email = user.email; // Dirección del email.
        this.user.photoUrl = user.photoURL; // URL de la imágen seleccionada.
        this.providerId = user.providerData[0].providerId; // id del usuario.
      }
    })
  }

}