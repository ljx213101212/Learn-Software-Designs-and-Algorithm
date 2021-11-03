import { EventEmitter } from 'events';
import Shipment from './model/Shipment/Shipment';

export const ON_SET_SHIPMENT = 'onSetShipment';
export const ON_SHIP_EVENT = 'onShip';

export default class Gui {
  state: Shipment | null;
  eventEmitter: EventEmitter;

  constructor() {
    this.state = null;
    this.eventEmitter = new EventEmitter();
  }

  on(_eventType: string, callback: (state: Shipment) => void): void {
    if (this.state) {
      callback(this.state);
    }
  }

  trigger(eventType: string, state: Shipment): void {
    this.state = state;
    this.eventEmitter.emit(eventType);
  }
}
