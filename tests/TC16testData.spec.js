const { test, expect } = require('@playwright/test')

const data = require('../tests/TestData/ContactUs.json')

const { customTest } = require('../tests/TestData/Data')

// test('verify test data in playwright', async ({ page }) => {
//     await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
//     await page.locator('[name="first_name"]').fill('vijayalakshmi')
//     await page.locator('[name="last_name"]').fill('koka')
//     await page.locator('[name="email"]').fill('ammu.duggi@gmail.com')
//     await page.locator('[name="message"]').fill('i am learning playwright')
//     await page.locator('[value="SUBMIT"]').click()
//     await expect(page.locator('h1')).toHaveText('Thank You for your Message!')

// })

// test.only('verify test data using json in playwright', async ({ page }) => {
//     await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
//     await page.locator('[name="first_name"]').fill(data.fstName)
//     await page.locator('[name="last_name"]').fill(data.lstName)
//     await page.locator('[name="email"]').fill(data.email)
//     await page.locator('[name="message"]').fill(data.msg)
//     await page.locator('[value="SUBMIT"]').click()
//     await expect(page.locator('h1')).toHaveText(data.SuccessMsg)

// })

data.forEach(ele => {
    test(`verify contactUs form using multiple datatest ${ele.fstName}`, async ({ page }) => {
        await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        await page.locator('[name="first_name"]').fill(ele.fstName)
        await page.locator('[name="last_name"]').fill(ele.lstName)
        await page.locator('[name="email"]').fill(ele.email)
        await page.locator('[name="message"]').fill(ele.msg)
        await page.locator('[value="SUBMIT"]').click()
        await expect(page.locator('h1')).toHaveText(ele.SuccessMsg)
    })
})

customTest.only('verify contactUs forn using js file data', async ({ page, testdataForContactUs }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.locator('[name="first_name"]').fill(testdataForContactUs.fstName)
    await page.locator('[name="last_name"]').fill(testdataForContactUs.lstName)
    await page.locator('[name="email"]').fill(testdataForContactUs.email)
    await page.locator('[name="message"]').fill(testdataForContactUs.msg)
    await page.locator('[value="SUBMIT"]').click()
    await expect(page.locator('h1')).toHaveText(testdataForContactUs.SuccessMsg)
})