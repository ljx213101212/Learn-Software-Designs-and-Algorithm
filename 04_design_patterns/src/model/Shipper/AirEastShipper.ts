import { ShipmentType } from '../Shipment/Shipment';
import Shipper from './Shipper';

export default class AirEastShipper extends Shipper {
  letterPerOunce: number = 0.39;
  packagePerOunce: number = 0.25;
  overSizedPerOunce: number = 0.39; //10 flat in addition

  private getLetterCost(weight: number) {
    return this.letterPerOunce * weight;
  }

  private getPackageCost(weight: number) {
    return this.packagePerOunce * weight;
  }

  private getOverSizedCost(weight: number) {
    return this.overSizedPerOunce * weight + 10;
  }

  public getCost(weight: number, shipmentType: string): number {
    switch (shipmentType) {
      case ShipmentType.LETTER: {
        return this.getLetterCost(weight);
      }
      case ShipmentType.PACKAGE: {
        return this.getPackageCost(weight);
      }
      case ShipmentType.OVERSIZE: {
        return this.getOverSizedCost(weight);
      }
    }
  }
}
