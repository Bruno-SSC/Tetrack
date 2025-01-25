import { Component, Input } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { activity_object, allowed_timeframes } from 'src/utils/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  imgs_path: string;
  @Input() activity!: activity_object;
  timeframe_index: allowed_timeframes = 'daily';

  constructor(private crud: CrudService) {
    this.crud.$timeframe.subscribe((value) => {
      this.timeframe_index = value;
    });
    this.imgs_path = this.crud.imgs_path;
  }

  label_previous(): string {
    if (this.timeframe_index == 'monthly') return 'last month';
    if (this.timeframe_index == 'weekly') return 'last week';
    return 'yesterday';
  }

  get_icon(ID: string): string {
    return this.crud.get_icon(ID);
  }

  get_color(ID: string): string {
    return this.crud.get_color(ID);
  }
}
