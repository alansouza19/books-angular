import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    id: new FormControl(),
    title: new FormControl(''),
    author: new FormControl(''),
    enumStatus: new FormControl('')
  });

  constructor(
   
    private readonly service: BooksService,
    private readonly route: Router,
    private readonly router: ActivatedRoute,
  ){
    this.router.queryParams.subscribe({
      next: (params) => {
        if(params?.['bookId']){
          this.service.findById(params?.['bookId']).subscribe({
            next: book => {
              this.bookForm.get('id')?.setValue(book.id)
              this.bookForm.get('title')?.setValue(book.title)
              this.bookForm.get('author')?.setValue(book.author)
              this.bookForm.get('enumStatus')?.setValue(book.enumStatus)
            }

          })
        }
      }
    })

  }

  
  submit() {
    if(this.bookForm.get('id')?.value){
      this.service.updateBooks(this.bookForm.value as IBooks).subscribe({
        next: () =>{
          alert("Book updated successfully!!");
          this.route.navigate(['/home']);
        }
      })
    } else{
    this.service.postBooks(this.bookForm.value as IBooks).subscribe({
      next: book =>{
        alert("Successfully registered book! " + "Id: " + book.id + ", Title: " + book.title);
        this.route.navigate(['/home']);
        }
      });
    }
  }

}
