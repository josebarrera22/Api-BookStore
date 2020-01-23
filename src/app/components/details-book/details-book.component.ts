import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { } // Inyección.
  public book: BookInterface = {}; // Propiedad para hacer referencia a la interfaz de los libros.

  ngOnInit() {
    const idBook = this.route.snapshot.params['id']; // Propiedad que nos traerá la id del libro.
    this.getDetails(idBook); // Ejecutar el método con los detalles de los libros.
  }

  getDetails(idBook: string): void { // Método para traer los detalles pertenecientes al libro.
    this.dataApi.getOneBook(idBook).subscribe(book => { // Método correspondiente en data-api.service.ts
      this.book = book;
    });
  }
}
