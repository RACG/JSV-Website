import { Injectable } 	from '@angular/core';

import { Activity }		from '../../to/activity'
import { ACTIVITIES }	from '../../data/activities'

@Injectable()
export class ActivityService {

	constructor() { }

	getActivities(): Activity[]{
		return ACTIVITIES;
	}
}