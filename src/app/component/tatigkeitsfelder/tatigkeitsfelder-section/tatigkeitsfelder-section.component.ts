import { Component, OnInit } 	from '@angular/core';
import { Activity } 			from '../../../to/activity';
import { ActivityService }		from '../../../service/activity/activity.service';

@Component({
  selector: 'app-tatigkeitsfelder-section',
  templateUrl: './tatigkeitsfelder-section.component.html',
  styleUrls: ['./tatigkeitsfelder-section.component.css']
})
export class TatigkeitsfelderSectionComponent implements OnInit {

	activities: Activity[];

	constructor(private activityService: ActivityService) {}

	ngOnInit() {
		console.log("---------- LOADING ACTIVITIES ----------");
		this.activities = this.activityService.getActivities();
	}

}