import { Page, Pages } from './Page';

/**
 * Implement PageFactory, so it will incapsulate pages creation logic.
 */
export default class PageFactory {
    constructor(public pages: Page[]) {}

    public createPages() {
        for (let i = 0; i < this.pages.length; i++) {
            this.pages.push(new Page(i + 1, this.pages[i].pageType, this.pages[i].pageMaterial));
        }
    }

    public getPagesLength() {
        return this.pages.length;
    }
}
