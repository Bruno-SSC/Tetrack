import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Activity, ActvList } from 'src/app/ts/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements AfterViewInit, OnInit {
  timeframe: string | null = 'daily';

  @Input() actv: Activity | undefined;
  @Input() deleteMode: boolean = false;
  @Output() removeActv: EventEmitter<Event> = new EventEmitter();
  @Output() timeDetectAlert: EventEmitter<Event> = new EventEmitter();

  previousActTime: number = 0;

  constructor(private crud: CrudService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.retrievePreviousTime();
    this.timeframe = this.route.snapshot.paramMap.get('timeframe');
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

    this.crud.updateTimeAmount(this.actv);
    this.timeDetectAlert.emit();
  }

  retrievePreviousTime(): void {
    /* This is not in "ngAfterViewInit" because afterViewInit is after the checking of data bindings in angular lifecycle. It means I would be changing the data of actv when angular already check the data binding with the UI and It would throw an error in development mode besides working "correctly". */

    let day = this.crud.currentDay;
    let allList = this.crud.retrieveAllActvs() as ActvList;
    let listKeys = Object.keys(allList);
    let currentDayPos = listKeys.findIndex((each) => day === each);
    let yesterday = listKeys[currentDayPos - 1];
    let prevActv = allList[yesterday].find((e) => e.ID === this.actv?.ID);
    if(prevActv == undefined) return
    this.previousActTime = prevActv.timeAmount;
  }
}
