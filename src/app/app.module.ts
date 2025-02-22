import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './components/admin/list-books/list-books.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/offers/offers.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule } from '@angular/forms'; // Importación necesasria para trabajar con los formularios en Angular.
import { environment} from '../environments/environment'; // Importación del fichero environments.
import { AngularFireModule} from '@angular/fire'; // Importación necesaria para el registro correcto de Firebase en nuestra app.
import { AngularFireDatabaseModule} from '@angular/fire/database'; // Importación para trabajar con el database.
import {AngularFireAuth} from '@angular/fire/auth'; // Importación para poder loggearse con Google y Facebook.
import {AngularFireStorageModule} from '@angular/fire/storage'; // Importación para subir imágenes a Firebase.
import { AngularFirestore } from '@angular/fire/firestore'; // Importación necesaria para trabajar con colecciones en Firebase.


@NgModule({
  declarations: [ // Inyección de los componentes.
    AppComponent,
    ListBooksComponent,
    DetailsBookComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent,
    NavbarComponent,
    OffersComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component
  ],
  imports: [ // Inyección de los módulos.
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AngularFireAuth, AngularFirestore], // Inyección de los servicios.
  bootstrap: [AppComponent]
})
export class AppModule { }
