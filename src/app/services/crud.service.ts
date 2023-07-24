import { Injectable } from '@angular/core';

import { Activity, ActvList } from '../ts/interfaces';
import { actvList } from 'src/app/ts/actvs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private actvList: ActvList;
  public currentDay: string = this.setCurrentDay();

  constructor() {
    this.actvList = actvList;
  }

  setCurrentDay(): string {
    // TODO: dá para usar o Date() para retornar o dia atual de fato.
    return '31/02/2022';
  }

  retrieveActvs(timeframe: string | null): Activity[] {
    let allDaysIndex = this.createDatesArray(timeframe);
    let sumActvs = this.sumTimeAmounts(allDaysIndex);
    return sumActvs;
  }

  retrieveOneActv(id: string): void {
   
  }

  deleteData(id: string): void {
    let day = this.currentDay;
    let newList = this.actvList[day].filter((a) => {
      if (a.ID != id) return a;
      return null;
    });
    this.actvList[day] = newList;
  }

  addData(newData: Activity): void {
    let day = this.currentDay;
    this.actvList[day] = [...this.actvList[day], newData];
  }

  updateTimeAmount(actv: Activity | undefined): void {
    if (actv == undefined) return;

    let day = this.currentDay;
    this.actvList[day] = this.actvList[day].map((e) => {
      if (e.ID === actv.ID) {
        e = actv;
      }
      return e;
    });

    console.log(this.actvList[day]);
  }

  retrieveAllActvs(): ActvList | [] {
    return this.actvList;
  }

  private createDatesArray(timeframe: string | null): string[] {
    let startPos: number = 0;

    switch (timeframe) {
      case 'daily':
        startPos = -1;
        break;
      case 'weekly':
        startPos = -7;
        break;
      case 'monthly':
        startPos = -31;
        break;
    }

    let allActvs = this.retrieveAllActvs();
    let allDaysIndex = Object.keys(allActvs);
    let currentDayPos = allDaysIndex.findIndex(
      (each) => this.currentDay === each
    );
    currentDayPos++;
    allDaysIndex = allDaysIndex.slice(currentDayPos + startPos, currentDayPos);

    return allDaysIndex;
  }

  private sumTimeAmounts(allDaysIndex: string[]): Activity[] {
    //TODO: ao invés do dia atual eu devia pegar o primeiro dia conhecido como atividades base e a cada iteração onde exista uma atividade que não bate com nenhuma das presentes, eu adiciono ela na base de atividades para soma.

    let baseActvs = JSON.parse(JSON.stringify(this.actvList[this.currentDay]));
    // [...] -> shallow copy where the baseActvs array would not be linked to this.actvList but the objects inside both will be linked. That's why I serialize and deserialize using json. It's a deep copy.

    for (let i = 0; i < baseActvs.length; i++) {
      baseActvs[i].timeAmount = 0;
    }

    for (let i = 0; i < baseActvs.length; i++) {
      allDaysIndex.forEach((date) => {
        this.actvList[date].forEach((each) => {
          if (baseActvs[i].ID === each.ID) {
            baseActvs[i].timeAmount = baseActvs[i].timeAmount + each.timeAmount;
          }
        });
      });
    }

    return baseActvs;
  }
}
