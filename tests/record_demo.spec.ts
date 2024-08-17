import { test, expect } from '@playwright/test';

test ('My record demo test',async({page}) => {
  
  await page.goto('https://www.saucedemo.com/')
  await page.locator('[data-test="username"]').click()
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').click()
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button1"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  
  await page.close();
 

  // ---------------------
 
})
