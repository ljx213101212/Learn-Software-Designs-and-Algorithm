import Shipper from '../Shipper/Shipper';

export default class Shipment {
  shipmentId: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: string[];

  shipper: Shipper;

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
      `Cost= ${this.shipper.getCost(this.weight)} ` +
      this.getMarksMessage()
    );
  }

  ship(): string {
    return this.getShipmentMessage();
  }
}
