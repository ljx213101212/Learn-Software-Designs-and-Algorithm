import Shipment from './Shipment';

class Gui {
  on(eventType: string, callback: (state: Shipment) => void): void {}

  trigger(eventType: string, state: Shipment): void {}
}
