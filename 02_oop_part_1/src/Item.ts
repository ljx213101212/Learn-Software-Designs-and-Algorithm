import { Comparable } from './Comparable';

export abstract class Item implements Comparable<Item> {
  private static numberOfItems: number;
  private _id: number;
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  private _value: number;
  public get value(): number {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
  }
  private _weight: number;
  public get weight(): number {
    return this._weight;
  }
  public set weight(value: number) {
    this._weight = value;
  }

  constructor(name: string, value: number, weight: number) {
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
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }

  /**
   *  The compare(first: Item, second: Item) method of ItemWeightComparator should function similarly to the compareTo(other: Item) method of the Item class,
   *  but for the weight field of the Items. If the weights are equal,
   *  this method should call the compareTo(other: Item) method of the first Item and return the resulting value.
   */
  public compare(first: Item, second: Item): number {
    if (first.weight > second.weight) {
      return 1;
    } else if (first.weight < second.weight) {
      return -1;
    } else {
      return first.compareTo(second);
    }
  }

  /**
   * reset() method should assign 0 to the “counter”
   */
  public static reset(): void {
    Item.numberOfItems = 0;
  }
}
