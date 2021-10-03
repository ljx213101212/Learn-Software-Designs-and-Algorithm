import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
  name: string;
  value: number;
  weight: number;
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
}
