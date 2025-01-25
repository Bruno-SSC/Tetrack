import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { allowed_timeframes } from 'src/utils/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  imgs_path: string = '/assets/images/';
  profile_pic: string = 'image-jeremy.png';
  timeframe_index: allowed_timeframes = 'daily';
  timeframe_options: allowed_timeframes[] = ['daily', 'weekly', 'monthly'];

  constructor(private crud: CrudService) {
    this.crud.$timeframe.subscribe((value) => {
      this.timeframe_index = value;
    });
    this.imgs_path = this.crud.imgs_path;
  }

  change_timeframe(index: allowed_timeframes) {
    this.crud.change_timeframe(index);
  }

  is_active(value: allowed_timeframes): boolean {
    if (value === this.timeframe_index) return true;
    else return false;
  }
}
