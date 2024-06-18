import { Locator, Page } from 'playwright/test';

export class HomePage {
    page: Page;
    menu: Locator;
    title: Locator;
    item: Locator;
    addToCart: Locator;
    cartBadge: Locator;
    cartContainer: Locator;
    removeitem: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menu = page.locator('#react-burger-menu-btn');
        this.title = page.getByText('Swag Labs');
        this.item = page.locator('#item_4_title_link');
        this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack')
        this.cartBadge = page.locator('//span[@class="shopping_cart_badge"]');
        this.cartContainer = page. locator('#shopping_cart_container')
        this.removeitem = page.locator('#remove-sauce-labs-backpack')
    }


// Kliknout na menu
    async clickOnMenu() {
        await this.menu.click();
    }
// Kliknout na položku
    async ClickOnItem() {
        await this.item.click();
    }
// Kliknout přidat do košíku batoh
    async clickOnAddToCart() {
        await this.addToCart.click();
    }
// Kliknout na košík
async clickOnCartContainer() {
    await this.cartContainer.click();
    }
// Kliknout odstranit z košíku batoh
async clickOnremoveitem() {
    await this.removeitem.click();
    }
}