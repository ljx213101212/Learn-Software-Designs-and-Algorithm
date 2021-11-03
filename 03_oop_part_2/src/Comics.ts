import { Item } from './Item';
import { Pages } from './Page';
import { PagesIterable } from './PagesIterable';
/**
 * class Comics (should be Iterable):
 *
 * a. properties: “pages”, “title”, “author”, “artist”
 * b. setters and getters for “title”, “author” and “artist”
 * c. “toString” -> “Comics: {title} by {author}, the artist is {artist}, number of pages: {number}”
 * d. pages” property keeps instance of Pages class
 */
export class Comics extends PagesIterable(Item) {
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
    private _artist: string;
    public get artist(): string {
        return this._artist;
    }
    public set artist(value: string) {
        this._artist = value;
    }
    constructor(title: string, author: string, artist: string, pages: Pages) {
        super();
        this.pages = pages;
        this.title = title;
        this.author = author;
        this.artist = artist;
        this.item = this as unknown as Item;
    }
    toString() {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.pages.length}`;
    }
}
