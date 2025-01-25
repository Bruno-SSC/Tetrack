import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  imgs_path: string = '';

  constructor() {
    // about how I will handle all the data
    // I don't want a single object with everything like I did for the last project
    // I would be best to have each activity be a simple object with an ID an essencial information.
    // Once the card receives the activity, the ID is used to recover details using the service.
    // this includes img_path.
  }
}
