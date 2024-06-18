import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

test('úpěšné přihlášení', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Nelze se přihlásit s validním už. jménem a nevalidním heslem', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.enterValidUsername();
  await loginPage.enterInvalidPassword();
  await loginPage.clickloginbutton();
  await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
});

test('Nelze se přihlásit s nevalidním už. jménem a validním heslem', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.enterInvalidUsername();
  await loginPage.enterValidPassword();
  await loginPage.clickloginbutton();
  await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
});

test('Nelze se přihlásit s nevalidním už. jménem a nevalidním heslem', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Stále běží')
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.enterInvalidUsername();
  await loginPage.enterInvalidPassword();
  await loginPage.clickloginbutton();
  await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible();
});

test('Nelze se přihlásit s nevyplněnými políčky', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.clickloginbutton();
  await expect(loginPage.requiredCredentialsErrorMessage).toBeVisible();
});

test('Nelze se přihlásit se zablokovaným uživatelem', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.enterLockedOutUsername();
  await loginPage.enterValidPassword();
  await loginPage.clickloginbutton();
  await expect(loginPage.lockedoutCredentialsErrorMessage).toBeVisible();
});
