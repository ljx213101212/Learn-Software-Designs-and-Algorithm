import Shipment, { ShipmentType } from './Shipment';

const OversizeType = <T extends { new (...args: any[]): {} }>(
  constructor: T
) => {
  return class extends constructor {
    type: string = ShipmentType.OVERSIZE;
    minWeight = 160;
    maxWeight = Number.MAX_VALUE;
  };
};

@OversizeType
export default class Oversize extends Shipment {
  [x: string]: any;
  constructor(
    toAddress: string,
    fromAddress: string,
    toZipCode: string,
    fromZipCode: string,
    weight: number,
    marks?: string[]
  ) {
    super(toAddress, fromAddress, toZipCode, fromZipCode, weight, marks);

    if (this.minWeight >= weight || this.maxWeight < weight) {
      throw new Error(`It is not a ${this.type}`);
    }
  }
}
