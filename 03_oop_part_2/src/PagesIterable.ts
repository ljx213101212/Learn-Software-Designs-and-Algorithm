import { Item } from './Item';
import { Page, Pages } from './Page';

class MixinPage {
    page: Page;
    item: any;

    constructor(page: Page, item: any) {
        this.page = page;
        this.item = item;
    }

    toString() {
        return this.item.toString() + ', ' + this.page.toString();
    }
}

/**
 * PagesIterable mixin:
 * a. You can use 3rd library or Symbol.iterator to implement PagesIterable mixin
 * b. the “for..of”, spread operator (“…”) and other data consumers should work with your iterables (Book, Magazine, Comics)
 * @param superclass
 * @returns mixin
 */
export const PagesIterable = (superclass: any) =>
    class extends superclass {
        private _item: Item;
        public get item(): Item {
            return this._item;
        }
        public set item(value: Item) {
            this._item = value;
        }

        *[Symbol.iterator]() {
            for (let page of this.item.pages.pages) {
                yield new MixinPage(page, this.item);
            }
        }
    };
