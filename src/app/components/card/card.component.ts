import { Component, Input, Output, EventEmitter } from '@angular/core';
import { activity_object } from 'src/utils/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', './mobile.component.scss'],
})
export class CardComponent {
  @Input() activity: activity_object = {} as activity_object;
  @Output() timeDetectAlert: EventEmitter<Event> = new EventEmitter();

  previousActTime: number = 0;

  constructor() {}

  ngAfterViewInit(): void {
    this.updateCardStyle();
  }

  updateCardStyle(): void {
    let activity = document.getElementById(this.activity.ID) as HTMLElement;
    activity.style.setProperty('--beforeColor', this.activity.before_color);
    activity.style.setProperty('--afterImg', this.activity.after_img);
  }
}
