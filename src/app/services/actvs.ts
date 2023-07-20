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

export const actvList: ActvList = {
  '01/00/00': [
    {
      ID: 'card1',
      name: 'Actv 1',
      timeAmount: 10,
      beforeColor: '#ff8c66',
      afterImg: 'url("../../../assets/images/icon-play.svg")',
    },
    {
      ID: 'card2',
      name: 'Actv 2',
      timeAmount: 20,
      beforeColor: '#ff8c66',
      afterImg: 'url("../../../assets/images/icon-play.svg")',
    },
    {
      ID: 'card3',
      name: 'Actv 3',
      timeAmount: 30,
      beforeColor: '#ff8c66',
      afterImg: 'url("../../../assets/images/icon-play.svg")',
    },
  ],
  '02/00/00': [
    {
      ID: 'card1',
      name: 'Actv 1',
      timeAmount: 1,
      beforeColor: '#ff8c66',
      afterImg: 'url("../../../assets/images/icon-play.svg")',
    },
    {
      ID: 'card2',
      name: 'Actv 2',
      timeAmount: 2,
      beforeColor: '#ff8c66',
      afterImg: 'url("../../../assets/images/icon-play.svg")',
    },
    {
      ID: 'card3',
      name: 'Actv 3',
      timeAmount: 3,
      beforeColor: '#ff8c66',
      afterImg: 'url("../../../assets/images/icon-play.svg")',
    },
    {
      ID: 'card4',
      name: 'Actv 4',
      timeAmount: 4,
      beforeColor: '#ff8c66',
      afterImg: 'url("../../../assets/images/icon-play.svg")',
    },
    {
      ID: 'card5',
      name: 'Actv 5',
      timeAmount: 5,
      beforeColor: '#ff8c66',
      afterImg: 'url("../../../assets/images/icon-play.svg")',
    },
  ],
};
