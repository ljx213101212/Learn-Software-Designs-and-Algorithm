import Shipment, { ShipmentType } from './Shipment';

const PackageType = <T extends { new (...args: any[]): {} }>(
  constructor: T
) => {
  return class extends constructor {
    type = ShipmentType.PACKAGE;
    minWeight = 15;
    maxWeight = 160;
  };
};

@PackageType
export default class Package extends Shipment {
  [x: string]: any;
  constructor(
    toAddress: string,
    fromAddress: string,
    toZipCode: string,
    fromZipCode: string,
    weight: number,
    marks?: string[]
  ) {
    super(
      toAddress,
      fromAddress,
      toZipCode,
      fromZipCode,
      weight,
      marks
    );

    if (this.minWeight >= weight || this.maxWeight < weight) {
      throw new Error(`It is not a ${this.type}`);
    }
  }
}
