import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

	name: String;
	description: String;
	urlImage: String;
	
	constructor() { }

	ngOnInit() {
  	}

}