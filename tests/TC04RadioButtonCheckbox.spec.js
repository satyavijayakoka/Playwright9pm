const {test,expect} = require('@playwright/test')
test('Handling radio button in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

    await page.locator('[value="green"]').check()
    await expect(page.locator('[value="green"]')).toBeChecked()
    //await page.waitForTimeout(3000)
    await expect(page.locator('input[value="orange"]')).not.toBeChecked()

    await page.locator('input[value="orange"]').check()
    await expect(page.locator('input[value="orange"]')).toBeChecked()

})