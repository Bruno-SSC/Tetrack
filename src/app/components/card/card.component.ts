import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Activity } from 'src/app/services/actvs';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements AfterViewInit, OnInit {
  @Input() actv: Activity | undefined;
  @Input() deleteMode: boolean = false;

  @Output() removeActv: EventEmitter<Event> = new EventEmitter();

  previousActTime: number = 0;

  constructor(private crud: CrudService) {}

  ngOnInit(): void {
    this.retrievePreviousTime();
  }

  ngAfterViewInit(): void {
    this.updateCardStyle();
  }

  updateCardStyle(): void {
    let activity = document.getElementById(this.actv!.ID) as HTMLElement;
    activity.style.setProperty('--beforeColor', this.actv!.beforeColor);
    activity.style.setProperty('--afterImg', this.actv!.afterImg);
  }

  updateTimeAmount(e: Event): void {
    let el = e.target as HTMLElement;
    el.id == 'increase'
      ? this.actv!.timeAmount++
      : this.actv!.timeAmount == 0
      ? (this.actv!.timeAmount = 0)
      : this.actv!.timeAmount--;
  }

  retrievePreviousTime(): void {
    /* This is not in "ngAfterViewInit" because afterViewInit is after the checking of data bindings in angular lifecycle. It means I would be changing the data of actv when angular already check the data binding with the UI and It would throw an error in development mode besides working "correctly". */
    if (this.actv) {
      let prevTime = this.crud.retrieveOneActv(this.actv.ID)?.timeAmount;
      if (prevTime != undefined) this.previousActTime = prevTime;
    }
  }
}
