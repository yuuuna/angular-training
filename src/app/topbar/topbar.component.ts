import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
    title = '圖書管理系統';

    constructor() { }

    ngOnInit() {
    }

}
