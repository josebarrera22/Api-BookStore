import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from 'src/app/models/book';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private books: BookInterface[]; // Propiedad para poder trabajar con la interfaz BookInterface.
  ngOnInit() {
    this.getOffers(); // Llamamos a este método luego de inicializado el componente.
    console.log('OFERTAS', this.books); // Mostrar por consola la cantidad de libros en oferta.
  }


  getOffers() { // Método para traer los libros que esten en oferta.
    this.dataApi.getAllBooksOffers().subscribe(offers => this.books = offers); // Llamado al método de data-api.service.ts
  }

}
