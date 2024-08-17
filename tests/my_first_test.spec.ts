const {test, expect} = require('@playwright/test')
//import {test, expect} from '@playwright/test'

test ('My first test',async({page}) =>{


    await page.goto("https://google.com.au")
    await expect(page).toHaveTitle('Google')
    
})