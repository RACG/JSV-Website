import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-uberuns-page',
	templateUrl: './uberuns-page.component.html',
	styleUrls: ['./uberuns-page.component.css']
})
export class UberunsPageComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		window.scrollTo(0, 0);
	}

}
