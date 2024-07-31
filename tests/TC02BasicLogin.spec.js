const {test,expect} = require('@playwright/test')

test('Verify login functionality with valid credentails',async({page})=>{
    // step 1 => navigate to the url
    await page.goto('https://www.saucedemo.com/v1/')
    // step 2 => Enter username
    await page.locator('[id="user-name"]').fill('standard_user')
    // step 3 => Enter password
    await page.locator('[data-test="password"]').fill('secret_sauce')
    // step 4 ==> click on login button
    await page.locator('#login-button').click()
    await page.waitForTimeout(3000)
    // step 5 ==> validations/Assertions
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator('.product_label')).toHaveText('Products')

})

