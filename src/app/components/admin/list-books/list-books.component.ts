import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { BookInterface } from '../../../models/book';
import { AuthService } from '../../../services/auth.service';



@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  constructor(private dataApi: DataApiService, private authService: AuthService) { } // Inyecciones.
  private books: BookInterface[]; // Propiedad que sirve de referencia a la interfaz BookInterface.
  public isAdmin: any = null; // Propiedad para trabajar en este apartado y en la de html.
  public userUid: string = null;

  ngOnInit() { // Luego de haber inicializado corréctamente el componente traer los siguientes métodos...
    this.getListBooks(); // Traer listado de los libros.
    this.getCurrentUser(); // Actual usuario loggeado y su rol.
  }

  getCurrentUser() { // Método para lograr reconocer al usuario loggeado y más precisamente su rol.
    this.authService.isAuth().subscribe(auth => { // Suscribimos...
      if (auth) { // En caso de que haya un usuario loggeado...
        this.userUid = auth.uid;
        this.authService.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin'); // Comprobar si en el objeto existe la propiedad 'admin' para demostrar que es administrador, caso contrario 'editor'.
          // this.isAdmin = true;
        });
      }
    });
  }
  getListBooks() { // Método para traer los libros que esten dentro de nuestra database.
    this.dataApi.getAllBooks() // Llamamos al método correspondiente de data-api.service.ts
      .subscribe(books => {
        this.books = books;
      });
  }

  onDeleteBook(idBook: string): void { // Método para eliminar libros.
    const confirmacion = confirm('Are you sure?'); // Confirmar si se lo desea hacer....
    if (confirmacion) {
      this.dataApi.deleteBook(idBook); // Llamar al correspondiente método en data-api.service.ts
    }
  }

  onPreUpdateBook(book: BookInterface) { // Método para traer los datos de los libros a través de nuestro modal.
    console.log('BOOK', book); // Recibimos por consola todos los datos de este objeto.
    this.dataApi.selectedBook = Object.assign({}, book); // El fin de esta línea es referirnos al objeto actual.
  }

}