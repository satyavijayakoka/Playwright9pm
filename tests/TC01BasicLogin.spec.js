const {test,expect} = require('@playwright/test')

test.only('verify login functionality with valid credentials',async({page})=>{
    // AAA
    // Arrange, Action, Assertion
    let dashboardEle = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    // step 1 ==> visit Url
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // step 2 ==> Enter Username
    await page.locator('input[name="username"]').fill('Admin')
    // step 3 ==> Enter Password
    await page.locator('input[name="password"]').fill('admin123')
    // step 4 ==> Click on login button
    await page.locator('button[type="submit"]').click()
    // step 5 ==> Assertion/Validation
    await page.waitForTimeout(5000)
    await expect(dashboardEle).toBeVisible()
    await expect(dashboardEle).toHaveText('Dashboard')
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    
})

test('verify login functionality with invalid credentials',async({page})=>{
    // step 1 ==> visit the url
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // step 2 ==> enter username
    await page.locator('input[name="username"]').fill('admin')
    // step 3 ==> enter password
    await page.locator('input[placeholder="Password"]').fill('Pass123')
    // step 4 ==> click on login button
    await page.locator('button[type="submit"]').click()
    // step 5 validation/assertion
    await expect(page.locator('div[role="alert"]')).toBeVisible()
    await expect(page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
    // HW
    await expect(page.locator('img[alt="company-branding"]')).toBeVisible()
    await expect(page).toHaveTitle('OrangeHRM')

})
// to run playwight test ==>  npx playwright test TC01BasicLogin.spec.js --headed














