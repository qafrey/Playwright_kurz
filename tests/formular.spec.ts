import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('div:nth-child(2) > div > .avatar > svg').click();
  await page.getByText('Practice Form').click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Jakub');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Machal');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('koko@babo.sk');
  await page.getByPlaceholder('Mobile Number').click();
  await page.getByPlaceholder('Mobile Number').fill('123456789');
  await page.locator('#subjectsInput').fill('test1');
  await page.getByText('Reading').click();
  await page.getByText('Music').click();
  await page.getByText('Sports').click();
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('na louce');
  await page.locator('#state svg').click();
  await page.getByText('NCR', { exact: true }).click();
  await page.locator('#city svg').click();
  await page.getByText('Delhi', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});