import { ShipmentType } from '../Shipment/Shipment';
import Shipper from './Shipper';

export default class ParcificParcerShipper extends Shipper {
  letterPerOunce: number = 0.51;
  packagePerOunce: number = 0.19;
  overSizedPerOunce: number = 0.53; //0.02 added per ounce

  private getLetterCost(weight: number) {
    return this.letterPerOunce * weight;
  }

  private getPackageCost(weight: number) {
    return this.packagePerOunce * weight;
  }

  private getOverSizedCost(weight: number) {
    return this.overSizedPerOunce * weight;
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
