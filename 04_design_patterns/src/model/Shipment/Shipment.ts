export default class Shipment {
  shipmentId: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: string[];

  constructor(
    shipmentId: number,
    toAddress: string,
    fromAddress: string,
    toZipCode: string,
    fromZipCode: string,
    weight: number,
    marks?: string[]
  ) {
    this.shipmentId = shipmentId;
    this.toAddress = toAddress;
    this.fromAddress = fromAddress;
    this.toZipCode = toZipCode;
    this.fromZipCode = fromZipCode;
    this.weight = weight;
    this.marks = marks;
  }
  getCost(): number {
    return 0;
  }
}
