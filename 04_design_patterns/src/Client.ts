import Gui, { ON_SET_SHIPMENT, ON_SHIP_EVENT } from "./Gui";
import Shipment from "./model/Shipment/Shipment";

export default class Client {
    shipment: Shipment | null;
    gui: Gui;

    constructor(gui: Gui) {
        this.shipment = null;
        this.gui = gui;
        this.gui.eventEmitter.on(ON_SET_SHIPMENT, () => {
            this.gui.on(ON_SET_SHIPMENT, this.setShipment.bind(this));
        });
        this.gui.eventEmitter.on(ON_SHIP_EVENT, () => {
            this.gui.on(ON_SHIP_EVENT, this.shipItSelf.bind(this));
        })
    }

    public setShipment(shipment: Shipment) {
        this.shipment = shipment;
    }

    public shipItSelf(shipment: Shipment): void {
        console.log(shipment?.ship());
    }
}