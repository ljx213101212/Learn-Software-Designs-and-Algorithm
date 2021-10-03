import { PRICE_PIZZA, WEIGHT_PIZZA } from './Constants';
import Consumable from './Consumable';

export default class Pizza extends Consumable {
  private _numberOfSlices: number;
  public get numberOfSlices(): number {
    return this._numberOfSlices;
  }
  public set numberOfSlices(value: number) {
    this._numberOfSlices = value;
  }
  private _slicesEasten: number;
  public get slicesEasten(): number {
    return this._slicesEasten;
  }
  public set slicesEasten(value: number) {
    this._slicesEasten = value;
  }
  constructor(numberOfSlices: number, isSpoiled: boolean) {
    super(
      '',
      PRICE_PIZZA * numberOfSlices,
      WEIGHT_PIZZA * numberOfSlices,
      isSpoiled
    );
    this.name = (typeof Pizza).toLowerCase();
  }
}
