import { Locator, Page } from 'playwright/test';

export class LoginPage {
    page: Page;
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    invalidCredentialsErrorMessage: Locator;
    requiredCredentialsErrorMessage: Locator;
    lockedoutCredentialsErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.invalidCredentialsErrorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
        this.requiredCredentialsErrorMessage = page.getByText('Epic sadface: Username is required')
        this.lockedoutCredentialsErrorMessage = page.getByText('Epic sadface: Sorry, this user has been locked out.')
    }


// Přejít na webovku s přihlašovacím formulářem
    async gotoLoginPage() {
        await this.page.goto('https://saucedemo.com/');
    }
// Zadání validního už. jména
    async enterValidUsername() {
        await this.userNameInput.fill('standard_user');
    }
// Zadání zablokovaného už. jména
async enterLockedOutUsername() {
    await this.userNameInput.fill('locked_out_user');
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