import { Item } from './Item';
import { Pages } from './Page';
import { PagesIterable } from './PagesIterable';
/**
 * class Magazine (should be Iterable):
 * a. properties: “pages”, “title”
 * b. setters and getters for “title”
 * c. “toString” -> “Magazine: {title} with number of pages: {number}”
 * d. “pages” property keeps instance of Pages class
 */
export class Magazine extends PagesIterable(Pages) {
    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    constructor(title: string, pages: Pages) {
        super();
        this.pages = pages;
        this.title = title;
        this.item = this as unknown as Item;
    }
    toString() {
        return `Magazine: ${this.title} with number of pages: ${this.pages.pages.length}`;
    }
}
