import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Activity } from 'src/app/ts/interfaces';

interface FormData {
  nameInput: string;
  colorSelect: string;
  iconSelect: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  actv: Activity | undefined;

  newActForm = this.formBuilder.group({
    nameInput: '',
    colorSelect: '',
    iconSelect: '',
  });

  constructor(
    private route: ActivatedRoute,
    private crud: CrudService,
    private formBuilder: FormBuilder
  ) {
    let actvID = this.route.snapshot.paramMap.get('actv');
    /* if (actvID) this.actv = this.crud.retrieveOneActv(actvID); */
  }

  onSubmit(): void {
    let values = this.newActForm.value as FormData;

    if (this.actv) {
      // update actv crud method
      return;
    }

    this.saveNewActv(values);
  }

  saveNewActv(v: FormData): void {
    let newActv: Activity = {
      ID: 'card6',
      name: v.nameInput,
      timeAmount: 0,
      beforeColor: v.colorSelect,
      afterImg: `url("../../../assets/images/icon-${v.iconSelect}.svg")`,
    };

    this.crud.addData(newActv);
  }
}
