import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  imgs_path: string = '/assets/images/';
  profile_pic: string = 'image-jeremy.png';
}
