export default abstract class Shipper {
  public abstract getCost(weight: number, shipmentType: string): number;
}
