import { presetColor, presetIcons, presetNames } from '../ts/presets';

export default class Actv {
  private static seqN: number = 1;

  ID: string;
  name: string;
  timeAmount: number;
  beforeColor: string;
  afterImg: string;

  constructor() {
    this.ID = 'card' + Actv.seqN;
    this.timeAmount = this.createTimeAmount();
    this.beforeColor = this.createBeforeColor();

    let name = this.createName();
    this.name = name;
    this.afterImg = this.createImgPath(name);

    Actv.seqN++;
  }

  createName(): string {
    let n = Math.floor(Math.random() * presetNames.length);
    let copy = presetNames[n];
    presetNames.splice(n, 1);
    return copy;
  }

  createTimeAmount(): number {
    let n = Math.ceil(Math.random() * 10);
    return n;
  }
  createBeforeColor(): string {
    let n = Math.floor(Math.random() * presetColor.length);
    return presetColor[n];
  }

  createImgPath(name: string): string {
    let path = `url("../../../assets/images/icon-${presetIcons[name]}.svg")`;
    return path;
  }
}
