import {test, expect} from '@playwright/test'

test ("Interact with webelements ", async ({page}) =>
{

    await page.goto("http://saucedemo.com")

    await page.pause()

    await page.click('id=user-name')

    await page.locator('id=user-name').fill("standard_user")

    //using css selectors
    await page.locator("#login-button").click()

    await page.locator('//input[@name="password"]').fill('secret-sauce')

    await page.locator("#login-button").click()


})