const{test,expect} = require('@playwright/test')

test('validate multitab in playwright',async({browser})=>{
    const context = await browser.newContext() // launches new fresh browser
    const page = await context.newPage() // launches new fresh tab in browser
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('[href="https://www.qaclickacademy.com"]').click()
    ])
    await newpage.waitForTimeout(4000)
    await expect(newpage.locator('[alt="Logo"]').first()).toBeVisible()
})
