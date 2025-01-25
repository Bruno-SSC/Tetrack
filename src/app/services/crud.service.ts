import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { activities_data, style_data } from 'src/utils/actitivies_data';

import {
  activity_object,
  activity_style,
  allowed_timeframes,
} from 'src/utils/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  activities: activity_object[] = activities_data;
  activities_style: activity_style[] = style_data;
  imgs_path: string = '/assets/images/';
  $timeframe = new BehaviorSubject<allowed_timeframes>('daily');

  change_timeframe(index: allowed_timeframes) {
    this.$timeframe.next(index);
  }

  get_color(ID: string): string {
    return this.activities_style.filter((a) => a.ID === ID)[0].color;
  }

  get_icon(ID: string): string {
    return this.activities_style.filter((a) => a.ID === ID)[0].icon;
  }
}

// about how I will handle all the data if I improve this project to be actually usable
// I don't want a single object with everything like I did for the dessert shop
// It would be best to have each activity be a simple object with an ID an essencial information.
// Once the card receives the activity, the ID is used to recover details using the service.
// this includes a property with unique styling aspects like this:
/* 
style: {
after_img: value,
banner_color: value,
}
*/
// alternatively I could actually use a style object to replace the "stye" prop of the element itself:
/* 
style: {
prop: value, (changes the icon)
prop: value,(changes the color)
}
*/
