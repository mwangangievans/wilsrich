import { Component } from '@angular/core';
import * as Assignment02Data from '../assets/data/Assignment02.json';
import { A2Personal, Book, CampusData } from './wilsrichInterface';
import { FooterWilsrichComponent } from './footer-wilsrich/footer-wilsrich.component';
import { HeaderWilsrichComponent } from './header-wilsrich/header-wilsrich.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BooksWilsrichComponent } from './books-wilsrich/books-wilsrich.component';
import { CampusWilsrichComponent } from './campus-wilsrich/campus-wilsrich.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterWilsrichComponent,
    HeaderWilsrichComponent,
    MatTabsModule,
    BooksWilsrichComponent,
    CampusWilsrichComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'A2wilsrich';
  wilsrichPersonal!: A2Personal;
  wilsrichBooks!: Book[];
  wilsrichCampus: CampusData[] = Assignment02Data.campusData;

  ngOnInit(): void {
    this.wilsrichPersonal = Assignment02Data.a2Personal;
    this.wilsrichBooks = Assignment02Data.myBooks;
    this.wilsrichCampus = Assignment02Data.campusData;
  }
}
