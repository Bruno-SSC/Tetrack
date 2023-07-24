export interface Activity {
  ID: string;
  name: string;
  timeAmount: number;
  beforeColor: string;
  afterImg: string;
}

export interface ActvList {
  [key: string]: Activity[];
}
