import Shipment from "./Shipment";
class Client {
    shipment: Shipment;

    static shipmentId: number = 1;

    // constructor() {
    //     shipment = new Shipment();
    // }
    shipItself(): string {
        return `Shipment ID: ${this.shipment.shipmentId} \n` + 
                `Sent from: ${this.shipment.fromAddress} \n` +
                `Sent to: ${this.shipment.toAddress} \n` + 
                `Cost: ${this.shipment.getCost()} \n`;
    }
}