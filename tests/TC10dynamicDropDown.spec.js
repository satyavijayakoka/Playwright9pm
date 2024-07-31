const { test, expect } = require('@playwright/test')

test('verify dynamic dropdown in playwright', async ({ page }) => {
    await page.goto('https://www.redbus.in/')
    await page.locator('#src').fill('Delhi')
    await page.waitForSelector('[class="placeHolderMainText"]')
    let optionCount = await page.locator('[class="placeHolderMainText"]').count()
    // console.log(optionCount) // 20

    //let text = await page.locator('[class="placeHolderMainText"]').last().textContent()
    //console.log(text) // Delhi Airport
    for (let i = 0; i < optionCount; i++) {
        let text = await page.locator('[class="placeHolderMainText"]').nth(i).textContent()
        console.log(text)
        if(text == 'Rohini'){
            await page.locator('[class="placeHolderMainText"]').nth(i).click()
            break
        }
    }
    await page.waitForTimeout(4000)
})