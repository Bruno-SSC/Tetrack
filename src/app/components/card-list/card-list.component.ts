import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CrudService } from 'src/app/services/crud.service';
import { Activity } from 'src/app/ts/interfaces';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  public actvList$: BehaviorSubject<Activity[]> | undefined;
  public deleteMode: boolean = false;
  private timeframe: string | null = 'daily';

  constructor(private crud: CrudService, private route: ActivatedRoute) {
    this.deleteMode = Boolean(this.route.snapshot.paramMap.get('deleteMode'));
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.timeframe = params.get('timeframe');
      this.actvList$ = new BehaviorSubject<Activity[]>(
        this.crud.retrieveActvs(this.timeframe)
      );
    });
  }

  timeChangeDetect(): void {
    this.actvList$?.next(this.crud.retrieveActvs(this.timeframe));
  }

  removeActv(e: Event): void {
    let el = e.target as HTMLElement;
    let divActv = el.closest('.activity') as HTMLElement;
    this.crud.deleteData(divActv.id);
    // FIXME: this.actvList$.next(this.crud.retrieveActvs());
  }
}
