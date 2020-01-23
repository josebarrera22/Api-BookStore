import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  public books = []; // Propiedad de tipo Array para ser contenedor de los libros.
  public book = '';

  ngOnInit() {
    this.dataApi.getAllBooks().subscribe(books => { // En este componente traemos todos los libros utilizando el correspondiente método de data-api.service.ts
      console.log('BOOKS', books); // Array con las propiedades de los libros.
      this.books = books;
    })
  }

}
