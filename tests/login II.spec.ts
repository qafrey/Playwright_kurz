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
    test.info().annotations.push({
      type: 'Test',
      description: 'Test kontroluje zda se nelze přihlásit s validním už. jménem a nevalidním heslem'
    })
    await test.step('Zadat validní už. jméno', async () => {
      await loginPage.enterValidUsername();
    })
    await test.step('Zadat nevalidní heslo', async () => {
      await loginPage.enterInvalidPassword();
    })
    await test.step('Kliknout na přihlašovací tlačítko', async () => {  
      await loginPage.clickloginbutton();
    })
    await test.step('Vyskočí chybová hláška', async () => {
      await expect(loginPage.invalidCredentialsErrorMessage, 'Nelze nalézt přihlašovací chybovou hlášku').toBeVisible();
    })
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

