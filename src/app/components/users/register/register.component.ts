import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { AuthService} from '../../../services/auth.service'
import { Router } from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage) { } // Inyecciónes.
  @ViewChild('imageUser', {static:true}) inputImageUser: ElementRef;
  public email: string = ''; // Propiedad de tipo string para el email.
  public password: string = ''; // Propiedad de tipo password para el password.

  uploadPercent: Observable<number>; // Propiedad para trabajar con los porcentajes de subida.
  urlImage: Observable<string>; // Propiedad para recuperar al url de nuestro fichero.

  ngOnInit() {
  }

  onUpload(e) { // Método para subir la imágen...
  // console.log('subir', e.target.files[0]);
   const id = Math.random().toString(36).substring(2); // Id aleatoria compuesta por letras y números.
   const file = e.target.files[0]; // Asignamos a esa variable el nombre del archivo que subimos.
   const filePath = `uploads/profile_${id}`; // Path correspondiente a la ruta en Firebase.
   const ref = this.storage.ref(filePath); // Hacemos referencia a través de 'storage' a la ruta creada anteriormente.
   const task = this.storage.upload(filePath,file); // Preparando el método para subir el respectivo archivo a nuestra colección en Firebase.
   this.uploadPercent = task.percentageChanges(); // Barra de porcentaje.
   task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe(); // Subida definitiva del archivo.
  }

  onAddUser() {
    this.authService.registerUser(this.email, this.password) // Llamamos al método creado en auth.service.ts
    .then((res)=> {
     this.authService.isAuth().subscribe(user => { // Suscribir para comprobar si el usuario está loggeado.
       if (user) { // Si lo está...
         user.updateProfile({ // Método para actualizar el perfil del mismo.
           displayName: '', // Vacío, puesto que no tenemos un campo para el nombre del usuario.
           photoURL: this.inputImageUser.nativeElement.value // URL de la imágen actual del usuario.
         }).then( () =>{
          this.router.navigate(['admin/list-books']); // Redireccionamiento a la lista de los libros.
         }).catch((error)=> 
           console.log('error',error));   
       }
     });
    }).catch(err => console.log('err',err.message));
    
  }

  onLoginGoogle(): void { // Loggeo a través de Google.
    this.authService.loginGoogleUser().then((res)=> { // Llamada al método correspondiente de auth.service.ts
      this.onLoginRedirect(); // Redireccionamiento a la lista de los libros.
    }).catch (err => console.log('err',err.message));
   
  }

  onLoginFacebook(): void { // Loggeo a través de Facebook.
    this.authService.loginFacebookUser().then((res)=> { // Llamada al método correspondiente de auth.service.ts
      this.onLoginRedirect(); // Redireccionamiento a la lista de los libros.
    }).catch(err => console.log('err',err.message));
   
  }



  onLoginRedirect() : void{ // Método para redirigirnos a...
    this.router.navigate(['admin/list-books']); // Nuestro listado de libros.
  }

}
