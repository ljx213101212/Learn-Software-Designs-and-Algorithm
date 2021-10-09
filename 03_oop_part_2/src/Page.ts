import PageFactory from './PageFactory';

/**
1.	class Page:  
a.	property “pageNumber”  
b.	property “pageType” (“with text” for Book, “with article” for Magazine, “with images” for Comics)  
c.	property “pageMaterial” (“simple paper” for Book, “glossy paper” for Magazine and Comics)  
 */

export class Page {
    pageNumber: number;
    pageType: string;
    pageMaterial: string;

    constructor(pageNumber: number, pageType: string, pageMaterial: string) {
        this.pageNumber = pageNumber;
        this.pageType = pageType;
        this.pageMaterial = pageMaterial;
    }

    toString() {
        return `here is page ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`;
    }
}

/**
 * class Pages which is wrapper for array of Page instances
 * a. should provide appropriate methods to communicate with iterator
 */
export class Pages {
    pages: Page[];
    factory: PageFactory;
    constructor(pages: Page[]) {
        this.factory = new PageFactory(pages);
        this.factory.createPages();
    }
}
