import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBooks } from 'src/app/models/books.interface';

const BASE_URL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  

  constructor(
    private readonly http: HttpClient
  ) { }

  listarBooks(): Observable<IBooks[]>{
    return this.http.get<IBooks[]>(`${BASE_URL}/busca-books`);
  }

  postBooks(book: IBooks): Observable<IBooks>{
    return this.http.post<IBooks>(`${BASE_URL}/salva-books`, book);

  }
  updateBooks(book: IBooks): Observable<IBooks>{
    return this.http.put<IBooks>(`${BASE_URL}/atualiza-books`, book);
  }

  deleteBooks(id:number): Observable<IBooks>{
    return this.http.delete<IBooks>(`${BASE_URL}/deleta-books/${id}`);
  }
}
