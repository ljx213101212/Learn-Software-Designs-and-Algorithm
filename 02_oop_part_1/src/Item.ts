import { Comparable } from './Comparable';

export abstract class Item implements Comparable<Item> {
  private static numberOfItems: number;

  id: number;
  name: string;
  value: number;
  weight: number;

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getValue(): number {
    return this.value;
  }

  public setValue(value: number): void {
    this.value = value;
  }

  public getWeight(): number {
    return this.weight;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }

  constructor(name: string, value: number, weight: number) {
    this.id = Item.numberOfItems;
    this.name = name;
    this.value = value;
    this.weight = weight;
    Item.numberOfItems += 1;
  }

  /**
   *
   * If the current instance’s value field is greater than other’s value field then the method should return a positive integer (convention is 1).
   * If the current instance’s value field is less than other’s value field then the method should return a negative integer (convention is -1).
   *
   * If both items are equal, then compare the name field of the items lexicographically (meaning, compare each character in the strings based on its value,
   * ignoring case. i.e. A == a), returning the appropriate value.
   */
  public compareTo(other: Item): number {
    if (this.value > other.value) {
      return 1;
    } else if (this.value < other.value) {
      return -1;
    } else {
      return this.name.toLowerCase().localeCompare(other.name.toLowerCase());
    }
  }

  /**
   *  Item.toString(): for an Item with the name of “ring”,
   *  a value of 3000, and a weight of 0.013,
   *  the method must return a String in the following format (excluding the quotes):
   *
   *  "ring − Value: 3000, Weight: 0.01"
   */
  public toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(
      2
    )}`;
  }

  /**
   * reset() method should assign 0 to the “counter”
   */
  public static reset(): void {
    Item.numberOfItems = 0;
  }
}
