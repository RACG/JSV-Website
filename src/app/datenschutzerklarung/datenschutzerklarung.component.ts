import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-datenschutzerklarung',
	templateUrl: './datenschutzerklarung.component.html',
	styleUrls: ['./datenschutzerklarung.component.css']
})
export class DatenschutzerklarungComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	ngAfterViewInit() {
		window.scrollTo(0, 0);
	}

}
