import { Component, OnInit, Input } from '@angular/core';

import { Activity }						from '../../../to/activity'

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

	activity: Activity;
	
	constructor() { }

	ngOnInit() {
  	}

}