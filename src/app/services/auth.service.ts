import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'; // Importación necesaria para trabajar con colecciones dentro de Firebase.
import { UserInterface } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) { } // Inyecciones.

  registerUser(email: string, pass: string) { // Método para registrarse a través de email y password.
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData),
            this.updateUserData(userData.user) // Asignación de su correspondiente rol.
        }).catch(err => console.log(reject(err)))
    });
  }

  loginEmailUser(email: string, pass: string) { // Método para poder loggearse a través de email y password.
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  loginFacebookUser() { // Método para poder loggearse a través de la red social Facebook.
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(credential => this.updateUserData(credential.user)) // Credenciales del usuario registrado con esta red social.
  }

  loginGoogleUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(credential => this.updateUserData(credential.user)) // Credenciales del usuario registrado con esta red social.
  }

  logoutUser() { // Método para poder desloggearse.
    return this.afsAuth.auth.signOut();
  }

  isAuth() { // Método para poder comprobar si el usuario está o no autentificado.
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  private updateUserData(user) { // Una vez que el usuario se ha registrado y loggeado se le asignará un rol.
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`); // Dirección de la nueva colección de usuarios.
    const data: UserInterface = { // Interfaz que será utilizada para trabajar con los respectivos campos.
      id: user.uid,
      email: user.email,
      roles: {
        editor: true // Rol por defecto, el de 'editor'.
      }
    }
    return userRef.set(data, { merge: true }) // Para confirmar y de esta manera guardar todo lo hecho en Firebase.
  }


  isUserAdmin(userUid) { // Método para corroborar si el usuario loggeado es 'admin'.
    return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }


}