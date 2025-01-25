import { Component, Input } from '@angular/core';
import { activity_object } from 'src/utils/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() activity: activity_object = {} as activity_object;
  constructor() {}
}
