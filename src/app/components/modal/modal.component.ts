import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { BookInterface } from '../../models/book';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { } // Inyección.
  @ViewChild('btnClose',{static: true}) btnClose: ElementRef; // Propiedad que simulará un botón de cierre.
  @Input() userUid: string;

  ngOnInit() {
  }

  onSaveBook(bookForm: NgForm) : void { // Método que nos servirá para guardar datos correspondiente a los libros.
    if (bookForm.value.id === null) { // Si el valor de la id es vacío procederemos a crear un nuevo libro.
      bookForm.value.userUid = this.userUid; // Cuando guardamos un nuevo libro, esta propiedad se guardará en el objeto y por lo tanto en Firebase.
      this.dataApi.addBook(bookForm.value); // Método para añadir un nuevo libro desde 0.
    } else { // Caso contrario, es decir, el valor de la id no es nulo...
      this.dataApi.updateBook(bookForm.value); // Método con el que actualizaremos un libro existente.
    }

    bookForm.resetForm(); // Método para resetear los campos del modal (con el fin de limpiarlo).
    this.btnClose.nativeElement.click(); // Una vez que presionemos el botón 'Save Book' cerrar el modal.
  }

}
