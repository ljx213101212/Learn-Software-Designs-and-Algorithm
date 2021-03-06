import { Pages } from './Page';
import { PagesIterable } from './PagesIterable';
/**
 * abstract class Item with abstract toString method.
 * Make Book, Magazine and Comics inherited from Item class.
 * Mix Iterable behavior into Item’s prototype
 */
export abstract class Item {
    pages: Pages;
    abstract toString(): string;
}
