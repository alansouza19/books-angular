import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IBooks } from 'src/app/models/books.interface';
import { StatusBooks } from 'src/app/models/enums/StatusBooks.enum';
import { BooksService } from 'src/app/services/books/books.service';

@Component({
  selector: 'app-create-update-books',
  templateUrl: './create-update-books.component.html',
  styleUrls: ['./create-update-books.component.scss']
})

export class CreateUpdateBooksComponent {

  statuslist = [{label: 'Disponível', value: StatusBooks.AVAILABLE} , {label: 'Indisponível', value: StatusBooks.NOT_AVAILABLE}];

  bookForm = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    enumStatus: new FormControl(null)
  });

  constructor(
    private readonly service: BooksService,
    private readonly route: Router,
  ){}
  ngOnInit(): void {
  }
  
  postBook() {
    this.service.postBooks(this.bookForm.value as IBooks).subscribe({
      next: book =>{
        alert("Successfully registered book! " + "Id: " + book.id + ", Title: " + book.title);
        this.route.navigate(['/home']);
      }
    });
  }

}
