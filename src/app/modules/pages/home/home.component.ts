import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBooks } from 'src/app/models/books.interface';
import { StatusBooks } from 'src/app/models/enums/StatusBooks.enum';
import { BooksService } from 'src/app/services/books/books.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  books: IBooks[] = [];

  constructor(
    private readonly service: BooksService,
    private readonly route: Router,
  ){}
  ngOnInit(): void {
    this.service.listarBooks().subscribe({
      next: lista => {
        this.books = lista;
      }
    });
  }

  create(){
    this.route.navigate(['/books'])
  }
}
