import { Component, OnInit } from '@angular/core';
import { IBooks } from 'src/app/models/books.interface';
import { StatusBooks } from 'src/app/models/enums/StatusBooks.enum';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    
  }
  books: IBooks[] = [
    { title: 'Book 1', author: 'Author 1', status:StatusBooks.AVAILABLE  },
    { title: 'Book 2', author: 'Author 2', status:StatusBooks.AVAILABLE  },
    { title: 'Book 3', author: 'Author 3', status:StatusBooks.NOT_AVAILABLE  },
    
  ];
}
