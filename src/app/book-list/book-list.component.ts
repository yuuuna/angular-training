import { Component, OnInit } from '@angular/core';
import * as bookData from '../../assets/book-data.json';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    bookListLocalStorage = [];
    bookList = [];

    constructor() { }

    ngOnInit() {
        this.initLocalStorage();
    }

    initLocalStorage(): void {
        this.bookListLocalStorage = JSON.parse(<any>localStorage.getItem('bookList'));
        console.log(this.bookListLocalStorage);
        if (this.bookListLocalStorage == null) {
            this.bookListLocalStorage = <any>bookData;
            localStorage.setItem('bookList', JSON.stringify(<any>this.bookListLocalStorage));
        }
        this.bookList = Object.values(this.bookListLocalStorage);
        this.bookList = this.bookList.slice(0, -1);
    }
}
