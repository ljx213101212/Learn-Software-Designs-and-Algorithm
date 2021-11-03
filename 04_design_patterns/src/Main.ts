import Client from "./Client";
import Gui, { ON_SET_SHIPMENT, ON_SHIP_EVENT } from "./Gui"
import Letter from "./model/Shipment/Letter";
import Oversize from "./model/Shipment/Oversize";
import Package from "./model/Shipment/Package";
import Shipment from "./model/Shipment/Shipment";
import AirEastShipper from "./model/Shipper/AirEastShipper";
import ChicagoSprintShipper from "./model/Shipper/ChicagoSprintShipper";
import ParcificParcerShipper from "./model/Shipper/ParcificParcerShipper";
import Shipper from "./model/Shipper/Shipper";

const shipment1 = new Letter(
    "1313 Mockingbird Lane, Tulsa, OK 67721k",
    "4th Ave SE, Bellevue, Wa 92021",
    "12292",
    "92021",
    5,
    ["MARK FRAGILE", "MARK DO NOT LEAVE IF ADDRESS NOT AT HOME"," RETURN RECEIPT REQUESTED"]);


const shipment2 = new Package(
    '1313 Mockingbird Lane, Tulsa, OK 67722k',
    '4th Ave SE, Bellevue, Wa 92021',
    '12293',
    '92021',
    20,
    [
    'MARK FRAGILE',
    ]
);

const shipment3 = new Oversize(
    '1314 Mockingbird Lane, Tulsa, OK 67722k',
    '4th Ave SE, Bellevue, Wa 92021',
    '12294',
    '92021',
    180,
    [
    'MARK FRAGILE',
    ]
);

const airEastShipper = new AirEastShipper();
const chicagoSprintShipper = new ChicagoSprintShipper();
const parcificParcerShipper = new ParcificParcerShipper();

const main = () => {

    console.log("program start");
    const gui = new Gui();
    const client = new Client(gui);

    //Test shipment 1
    gui.trigger(ON_SET_SHIPMENT, shipment1);
     //fail because has not set shipper yet.
    gui.trigger(ON_SHIP_EVENT, shipment1);
    shipment1.setShipper(airEastShipper);
    // ok
    gui.trigger(ON_SHIP_EVENT, shipment1);
    
    //Test shipment 2
    gui.trigger(ON_SET_SHIPMENT, shipment2);
    shipment2.setShipper(chicagoSprintShipper);
    gui.trigger(ON_SHIP_EVENT, shipment2);

    //Test shipment 3
    gui.trigger(ON_SET_SHIPMENT, shipment3);
    shipment3.setShipper(parcificParcerShipper);
    gui.trigger(ON_SHIP_EVENT, shipment3);
}

main();