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

test('verify multiTab with removing target_blank attribute',async({browser})=>{
    const context = await browser.newContext() // launches new fresh browser
    const page = await context.newPage() // launches new fresh tab in browser
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    // to interact with DOM we use evaluate() inbuilt method
    await page.evaluate(()=>{
        const selector = document.querySelector('[id="opentab"]')
        selector.removeAttribute('target','_blank')
    })
    await page.locator('[href="https://www.qaclickacademy.com"]').click()
    await page.waitForTimeout(5000)

    
})

test('verify multitab with remove and add attribute',async({browser})=>{
    const context = await browser.newContext() // launches new fresh browser
    const page = await context.newPage() // launches new fresh tab in browser
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.evaluate(()=>{
        const selector = document.querySelector('[id="opentab"]')
        selector.removeAttribute('target','_blank')
        selector.setAttribute('target','_self')
    })
    await page.locator('[href="https://www.qaclickacademy.com"]').click()
    await page.waitForTimeout(5000)
})

test.only('add disabled attribute to input element',async({browser})=>{
    const context = await browser.newContext() // launches new fresh browser
    const page = await context.newPage() // launches new fresh tab in browser
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await page.evaluate(()=>{
        const selector = document.querySelector('input[value="radio1"]')
        selector.setAttribute('action','disabled')
    })
    await page.waitForTimeout(5000)
})

// npx playwright test TC17multitab.spec.js --headed --debug ===> for stepe by step execution in playwright
