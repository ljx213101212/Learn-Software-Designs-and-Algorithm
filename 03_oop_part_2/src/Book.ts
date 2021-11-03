import { Item } from './Item';
import { Pages } from './Page';
import { PagesIterable } from './PagesIterable';

/**
 * class Book (should be Iterable):
 *
 * a. properties: “pages”, “title”, “author”
 * b. setters and getters for “title” and “author”
 * c. “toString” -> “Book: {book title} by {author} with number of pages: {number}”
 * d. “pages” property keeps instance of Pages class
 */
export class Book extends PagesIterable(Item) {
    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    private _author: string;
    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }
    constructor(title: string, author: string, pages: Pages) {
        super();
        this.pages = pages;
        this.title = title;
        this.author = author;
        this.item = this as unknown as Item;
    }
    toString() {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.pages.length}`;
    }
}
