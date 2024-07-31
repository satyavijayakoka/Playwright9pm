const {test,expect} = require('@playwright/test')
test('Handling radio button in playwright',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    await page.locator('#vfb-7-1').check()
    await expect(page.locator('#vfb-7-1')).toBeChecked()

    let radio = page.locator('#vfb-7-3')
    await expect(radio).not.toBeChecked()
    await radio.check()
    await expect(radio).toBeChecked()

})

test('handlimg checkboxes in playwright',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-0')).not.toBeChecked()
    let checkBox2 = await page.locator('#vfb-6-1')
    checkBox2.check()
    await expect(checkBox2).toBeChecked()
})


test.only('handlimg checkboxes in playwright with click method',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    let checkBox2 = await page.locator('#vfb-6-1')
    checkBox2.check()
    await expect(checkBox2).toBeChecked()
    await checkBox2.click()
    await expect(checkBox2).not.toBeChecked()
})






