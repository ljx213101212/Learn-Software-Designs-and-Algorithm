import Shipper from '../Shipper/Shipper';
import Letter from './Letter';

export enum ShipmentType {
  LETTER = "Letter",
  OVERSIZE = "Oversize",
  PACKAGE = "Package",
}


export default abstract class Shipment {
  type: string;
  shipmentId: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: string[];

  shipper: Shipper | null;

  static id: number = 1;
  constructor(
    toAddress: string,
    fromAddress: string,
    toZipCode: string,
    fromZipCode: string,
    weight: number,
    marks?: string[]
  ) {
    this.shipmentId = ++Shipment.id;
    this.toAddress = toAddress;
    this.fromAddress = fromAddress;
    this.toZipCode = toZipCode;
    this.fromZipCode = fromZipCode;
    this.weight = weight;
    this.marks = marks;
  }

  setShipper(shipper: Shipper): void {
    this.shipper = shipper;
  }

  getShipmentId(): number {
    return this.shipmentId;
  }

  getMarksMessage(): string {
    let marksMessage = '';
    this.marks.forEach((mark) => {
      marksMessage += mark;
    });
    return marksMessage;
  }

  getShipmentMessage(): string {
    return (
      `Shipment with the ID ${this.shipmentId} ` +
      `will be picked up from ${this.fromAddress} and` +
      `and shipped to ${this.toAddress} ` +
      `Cost= ${this.shipper?.getCost(this.weight, this.type)} ` +
      this.getMarksMessage()
    );
  }

  ship(): string {
    if (!this.shipper) {
      console.error(`please assign a shipper to the shipment: ${this.shipmentId}`)
      return "ship failed.";
    }
    return this.getShipmentMessage();
  }
}
