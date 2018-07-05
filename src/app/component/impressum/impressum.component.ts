import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-impressum',
	templateUrl: './impressum.component.html',
	styleUrls: ['./impressum.component.css']
})
export class ImpressumComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		window.scrollTo(0, 0);
	}

}
