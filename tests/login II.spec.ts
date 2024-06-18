import test,{ expect } from '../fixtures/basePages';
import { LoginPage } from '../page-objects/LoginPage';

test.describe('Login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
  })
  test('úpěšné přihlášení', async ({ page, loginPage }) => {
    await loginPage.login();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
  
  test('Nelze se přihlásit s validním už. jménem a nevalidním heslem', async ({ page, loginPage }) => {
    await loginPage.enterValidUsername();
    await loginPage.enterInvalidPassword();
    await loginPage.clickloginbutton();
    await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
  });
  
  test('Nelze se přihlásit s nevalidním už. jménem a validním heslem', async ({ page, loginPage }) => {
    await loginPage.enterInvalidUsername();
    await loginPage.enterValidPassword();
    await loginPage.clickloginbutton();
    await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
  });
  
  test('Nelze se přihlásit s nevalidním už. jménem a nevalidním heslem', async ({ page, loginPage }) => {
    await loginPage.enterInvalidUsername();
    await loginPage.enterInvalidPassword();
    await loginPage.clickloginbutton();
    await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
  });
  
  test('Nelze se přihlásit s nevyplněnými políčky', async ({ page, loginPage }) => {
    await loginPage.clickloginbutton();
    await expect(loginPage.requiredCredentialsErrorMessage).toBeVisible();
  });
  
  test('Nelze se přihlásit se zablokovaným uživatelem', async ({ page, loginPage }) => {
    await loginPage.enterLockedOutUsername();
    await loginPage.enterValidPassword();
    await loginPage.clickloginbutton();
    await expect(loginPage.lockedoutCredentialsErrorMessage).toBeVisible();
  });
})

