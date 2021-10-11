import { PRICE_PIZZA, WEIGHT_PIZZA } from './Constants';
import Consumable from './Consumable';

export default class Pizza extends Consumable {
  numberOfSlices: number;
  sliceEasten: number;

  public getNumberOfSlices(): number {
    return this.numberOfSlices;
  }
  public setNumberOfSlices(numberOfSlices: number): void {
    this.numberOfSlices = numberOfSlices;
  }

  public getSlicesEasten(): number {
    return this.sliceEasten;
  }

  public setSlicesEasten(value: number): void {
    this.sliceEasten = value;
  }

  constructor(numberOfSlices: number, spoiled: boolean) {
    super(
      '',
      PRICE_PIZZA * numberOfSlices,
      WEIGHT_PIZZA * numberOfSlices,
      spoiled
    );
    this.name = 'pizza';
  }
}
