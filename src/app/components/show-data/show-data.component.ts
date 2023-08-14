import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.scss'],
})
export class ShowDataComponent {
  constructor(private crud: CrudService) {
    console.clear();
    console.log('（＾＿－）');
    console.log('Hey beauty, all data is below: ');
    console.log(this.crud.retrieveAllActvs());
  }
}
