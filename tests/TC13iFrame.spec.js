const { test, expect } = require('@playwright/test')

// 1st way
test('handlig iFrame by .framelocator in playwright',async({page})=>{
 await page.goto('https://letcode.in/frame')
 //await page.locator('[placeholder="Enter name"]').fill('Minskole')
 let frame = await page.frameLocator('#firstFr')
 await frame.locator('[placeholder="Enter name"]').fill('Minskole')
 expect(frame.locator('[placeholder="Enter name"]')).toBeVisible()
 await page.waitForTimeout(3000)
})

//2nd way by .frame method by passing name attr
test('Handling iFrame by .frame method',async({page})=>{
    await page.goto('https://letcode.in/frame')
    let frame1 = await page.frame('firstFr')
    await frame1.locator('[name="fname"]').fill('Satya')
    await frame1.locator('[name="lname"]').fill('Koka')
    await expect(frame1.locator('[name="fname"]')).toBeVisible()
    await expect(frame1.locator('[name="lname"]')).toBeVisible()
    expect(frame1.locator('[class="title has-text-info"]'))
    .toHaveText('You have entered Satya Koka')
    await page.waitForTimeout(3000)
})

// 3rd way by passing URL to .frame method
test.only('verify Iframe by url to .frame method',async({page})=>{
    await page.goto('https://letcode.in/frame')
    let frame3 = await page.frame({url:'https://letcode.in/frameUI'})
    await frame3.locator('[name="fname"]').fill('Satya')
    await frame3.locator('[name="lname"]').fill('Koka')
    await expect(frame3.locator('[name="fname"]')).toBeVisible()
    await expect(frame3.locator('[name="lname"]')).toBeVisible()
    expect(frame3.locator('[class="title has-text-info"]'))
    .toHaveText('You have entered Satya Koka')
})









