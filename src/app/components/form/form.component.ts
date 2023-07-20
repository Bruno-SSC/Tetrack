import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/services/actvs';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  actvID: string | null;
  actv: Activity | undefined;
  newActv: Activity = {
    ID: 'card6',
    name: 'Actv 6',
    timeAmount: 6,
    beforeColor: '#ff8c66',
    afterImg: 'url("../../../assets/images/icon-work.svg")',
  };

  constructor(private route: ActivatedRoute, private crud: CrudService) {
    this.actvID = this.route.snapshot.paramMap.get('actv');
    if (this.actvID) this.actv = this.crud.retrieveOneActv(this.actvID);
  }

  saveNewActv(): void {
    this.crud.addData(this.newActv);
  }
}
