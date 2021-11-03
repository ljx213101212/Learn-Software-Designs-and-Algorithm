import Shipper from "./Shipper";

class AirEastShipper extends Shipper {
    letterPerOunce: number = 0.39;
    packagePerOunce: number = 0.25;
    overSizedPerOunce: number = 0.39;//10 flat in addition
}