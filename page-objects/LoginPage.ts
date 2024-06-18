import { Locator, Page } from 'playwright/test';

export class LoginPage {
    page: Page;
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }


// Přejít na webovku s přihlašovacím formulářem
    async gotoLoginPage() {
        await this.page.goto('https://saucedemo.com/');
    }
// Zadání validního už. jména
    async enterValidUsername() {
        await this.userNameInput.fill('standard_user');
    }
// Zadání nevalidního už. jména
    async enterInvalidUsername() {
    await this.userNameInput.fill('Bob');
    }
// Zadání validního hesla
    async enterValidPassword() {
        await this.passwordInput.fill('secret_sauce');
    }
// Zadání nevalidního hesla
    async enterInvalidPassword() {
    await this.passwordInput.fill('Blop');
    }
// Odkliknutí přihlašovacího tlačítka
    async clickloginbutton() {
        await this.loginButton.click();
    }
    async login() {
        await this.userNameInput.fill('standard_user');
        await this.passwordInput.fill('secret_sauce');
        await this.loginButton.click();
    }
}