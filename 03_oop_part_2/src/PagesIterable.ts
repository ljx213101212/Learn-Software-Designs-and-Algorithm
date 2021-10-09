import { Pages } from './Page';

/**
 * PagesIterable mixin:
 * a. You can use 3rd library or Symbol.iterator to implement PagesIterable mixin
 * b. the “for..of”, spread operator (“…”) and other data consumers should work with your iterables (Book, Magazine, Comics)
 * @param superclass
 * @returns mixin
 */
export const PagesIterable = (superclass: any) =>
    class extends superclass {
        pages: Pages;

        constructor(pages: Pages) {
            super(pages);
            this.pages = pages;
        }
        *[Symbol.iterator]() {
            for (let page of this.pages.pages) {
                yield page;
            }
        }
    };
