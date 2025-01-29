import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { main_anim } from 'src/utils/animations';
import { activity_object } from 'src/utils/interfaces';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  animations: [main_anim],
})
export class CardListComponent {
  activities: activity_object[];

  constructor(private crud: CrudService) {
    this.activities = this.crud.activities;
  }
}
