import { Component, Input } from '@angular/core';
import { Book } from '../wilsrichInterface';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-books-wilsrich',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './books-wilsrich.component.html',
  styleUrl: './books-wilsrich.component.scss',
})
export class BooksWilsrichComponent {
  @Input() myBooks!: Book[];

  displayedColumns: string[] = ['authorName', 'bookTitle', 'published'];
}
