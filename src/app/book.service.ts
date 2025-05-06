import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private book: Book = {
    title: 'Преступление и наказание',
    year: 1866,
    author: 'Фёдор Достоевский',
    pages: 430,
    publisher: 'Русское слово',
    coverImage: 'https://example.com/cover.jpg',
    authorImage: 'https://example.com/author.jpg',
    reviews: [
      'Глубокий и захватывающий роман.',
      'Классика русской литературы.'
    ]
  };

  getBook(): Book {
    return this.book;
  }
}