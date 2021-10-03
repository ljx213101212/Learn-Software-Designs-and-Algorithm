import { Item } from './Item';
import { ItemComparator } from './ItemComparator';
/**
 * The Inventory class is a container for items in this fantasy game.
 */
export default class Inventory {
  items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(newItem: Item): void {
    this.items.push(newItem);
  }
  /**
   * Inventory.sort():
   * This sorts the items in the Inventory instance based on their value
   *
   */
  sort(): void;
  /**
   * Inventory.sort(comparator: ItemComparator): This sorts the items in the Inventory instance based on their weight.
   */
  sort(comparator?: ItemComparator): void {
    if (!comparator) {
      this.items.sort((a: Item, b: Item): number =>
        a.value > b.value ? 1 : -1
      );
      return;
    }
    this.items.sort(comparator.compare);
  }
  /**
   * Inventory.toString: return string representation of the item list (.join(‘, ’))
   */
  toString(): string {
    return this.items.map((item) => item.name).join(',');
  }
}
