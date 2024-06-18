import { Locator, Page } from 'playwright/test';

export class HomePage {
    page: Page;
    menu: Locator;
    title: Locator;
    item: Locator;
    addToCart: Locator;


    constructor(page: Page) {
        this.page = page;
        this.menu = page.locator('#react-burger-menu-btn');
        this.title = page.getByText('Swag Labs');
        this.item = page.locator('#item_4_title_link');
        this.addToCart = page.locator('add-to-cart')
    }


// Kliknout na menu
    async clickOnMenu() {
        await this.menu.click();
    }
// Kliknout na položku
    async ClickOnItem() {
        await this.item.click();
    }
// Zadání nevalidního už. jména
    async clickOnAddToCart() {
        await this.addToCart.click();
    }
}