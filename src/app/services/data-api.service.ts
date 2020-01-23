import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BookInterface } from '../models/book';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { } // Inyección.
  private booksCollection: AngularFirestoreCollection<BookInterface>; // Propiedad que utiliza el correspondiente objeto para luego trabajar con los campos de la interfaz BookInterface.
  private books: Observable<BookInterface[]>; // Propiedad para hacer referencia a los libros en su totalidad.
  private bookDoc: AngularFirestoreDocument<BookInterface>; // Propiedad para poder trabajar con AngularFirestoreDocument con los correspondientes campos de la interfaz BookInterface.
  private book: Observable<BookInterface>; // Propiedad para hacer referencia a un libro.
  public selectedBook: BookInterface = { // Propiedad que será utilizada en el modal.component.html y en el modal.component.ts para trabajar.
    id: null // campo con el respectivo valor nulo para poder distinguir corréctamente si se quiere crear un nuevo libro o el de actualizar uno ya existente.
  };

  getAllBooks() { // Método para poder traer todos los libros.
    this.booksCollection = this.afs.collection<BookInterface>('books'); // Recuperar en su totalidad, los libros alojados en nuestra Database.
    return this.books = this.booksCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as BookInterface;
          data.id = action.payload.doc.id; // Recuperar las id's correspondiente a los libros.
          return data;
        });
      }));
  }


  getAllBooksOffers() { // Método para poder traer los libros que esten en oferta.
    this.booksCollection = this.afs.collection('books', ref => ref.where('oferta', '==', '1'));
    return this.books = this.booksCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as BookInterface;
          data.id = action.payload.doc.id; // Recuperamos la id's correspondientes de los libros.
          return data;
        });
      }));
  }

  getOneBook(idBook: string) { // Método para traer 1 determinado libro.
    this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`); // Traemos el libro gracias a su id.
    return this.book = this.bookDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as BookInterface;
        data.id = action.payload.id; // Recuperamos la id correspondiente al libro.
        return data;
      }
    }));
  }

  addBook(book: BookInterface): void { // Método para poder añadir nuevos libros (de a 1).
    this.booksCollection.add(book);
  }
  updateBook(book: BookInterface): void { // Método para actualizar libros ya existentes.
    let idBook = book.id;
    this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`); // Traer el libro por id para poder actualizar.
    this.bookDoc.update(book); // Método para actualizar.
  }
  deleteBook(idBook: string): void { // Método para eliminar libros.
    this.bookDoc = this.afs.doc<BookInterface>(`books/${idBook}`); // Traer libro por id para poder eliminarlo.
    this.bookDoc.delete(); // Método para eliminar.
  }
}