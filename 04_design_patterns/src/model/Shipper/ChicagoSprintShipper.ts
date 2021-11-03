import { ShipmentType } from '../Shipment/Shipment';
import Shipper from './Shipper';

export default class ChicagoSprintShipper extends Shipper {
  letterPerOunce: number = 0.42;
  packagePerOunce: number = 0.2;
  overSizedPerOunce: number = 0; //No charge? Seriously?

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
