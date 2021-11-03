import Shipper from "./Shipper";

class ParcificParcerShipper extends Shipper{
    letterPerOunce: number = 0.51;
    packagePerOunce: number = 0.19;
    overSizedPerOunce: number = 0.53;//0.02 added per ounce

    public getCost(weight: number): number {
        throw new Error("Method not implemented.");
    }
}