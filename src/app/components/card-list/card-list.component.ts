import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Activity } from 'src/app/services/actvs';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  public actvList$: BehaviorSubject<Activity[]>;
  public deleteMode: boolean = false;

  constructor(private crud: CrudService, private route: ActivatedRoute) {
    this.actvList$ = new BehaviorSubject<Activity[]>(this.crud.retrieveActvs());
    this.deleteMode = Boolean(this.route.snapshot.paramMap.get('deleteMode'));
  }

  ngOnInit(): void {}

  removeActv(e: Event): void {
    let el = e.target as HTMLElement;
    let divActv = el.closest('.activity') as HTMLElement;
    this.crud.deleteData(divActv.id);
    this.actvList$.next(this.crud.retrieveActvs());
  }
}
