import { Injectable } from '@angular/core';
import { Activity, ActvList, actvList } from './actvs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private actvList: ActvList;

  constructor() {
    this.actvList = actvList;
  }

  retrieveAllActvs(): ActvList | [] {
    return this.actvList;
  }

  retrieveActvs(): Activity[] {
    let day = '02/00/00';
    return this.actvList[day];
  }

  retrieveOneActv(id: string): Activity | undefined {
    let day = '01/00/00';
    return this.actvList[day].find((actv) => actv.ID == id);
  }

  deleteData(id: string): void {
    let day = '02/00/00';
    let newList = this.actvList[day].filter((a) => {
      if (a.ID != id) return a;
      return null;
    });
    this.actvList[day] = newList;
  }

  addData(newData: Activity): void {
    let day = '02/00/00';
    this.actvList[day] = [...this.actvList[day], newData];
    console.log(this.actvList[day]);
  }
}
