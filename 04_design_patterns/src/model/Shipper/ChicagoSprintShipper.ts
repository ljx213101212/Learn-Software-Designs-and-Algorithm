import Shipper from "./Shipper";

class ChicagoSprintShipper extends Shipper{
    letterPerOunce: number = 0.42;
    packagePerOunce: number = 0.20;
    overSizedPerOunce: number = 0;//No charge? Seriously? 

    public getCost(weight: number): number {
        throw new Error("Method not implemented.");
    }
}