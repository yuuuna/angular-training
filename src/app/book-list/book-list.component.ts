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
    search = {
        data: '',   // 查詢內容
        date: ''    // 查詢日期
    };

    constructor() { }

    ngOnInit() {
        this.initLocalStorage();
    }

    initLocalStorage(): void {
        this.bookListLocalStorage = JSON.parse(<any>localStorage.getItem('bookList'));
        if (this.bookListLocalStorage == null || this.bookListLocalStorage.length === 0) {
            this.bookListLocalStorage = Object.values(<any>bookData).slice(0, -1);
            localStorage.setItem('bookList', JSON.stringify(<any>this.bookListLocalStorage));
        }
        this.bookList = this.bookListLocalStorage;
    }

    searchBook(): void {
        let bookListSearch = this.bookListLocalStorage;
        let book = [];
        let isContain = false;
        if (this.search.data !== '' || this.search.date !== '') {
            bookListSearch = [];
            for (let index = 0; index < this.bookListLocalStorage.length; index++) {
                book = this.bookListLocalStorage[index];
                isContain = false;
                if (this.search.data !== '') {
                    if ((book['BookName'] != null && book['BookName'].indexOf(this.search.data) >= 0) ||
                            (book['BookCategory'] != null && book['BookCategory'].indexOf(this.search.data) >= 0) ||
                            (book['BookAuthor'] != null && book['BookAuthor'].indexOf(this.search.data) >= 0)) {
                        isContain = true;
                    }
                }
                if (this.search.date !== '') {
                    if (book['BookBoughtDate'] === this.search.date) {
                        isContain = true;
                    }
                }
                if (isContain) {
                    bookListSearch.push(book);
                }
            }
        }
        this.bookList = bookListSearch;
    }
}
