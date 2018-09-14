import { Component, OnInit } from '@angular/core';
import * as bookData from '../../assets/book-data.json';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    bookListLocalStorage = [];
    bookData = [];

    constructor() { }

    ngOnInit() {
        this.initLocalStorage();
    }

    initLocalStorage(): void {
        console.log(bookData);
        // this.bookListLocalStorage = JSON.parse(localStorage.getItem('bookList'));
        // if (this.bookListLocalStorage == null) {
        //
        // }
    }
}
