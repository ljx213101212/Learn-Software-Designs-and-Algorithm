import { Page, Pages } from './Page';

/**
 * Implement PageFactory, so it will incapsulate pages creation logic.
 */
export default class PageFactory {
    constructor(public pageNumber: number, public pageType: string, public pageMaterial: string) {}

    public createPages(): Page {
        return new Page(this.pageNumber, this.pageType, this.pageMaterial);
    }
}
