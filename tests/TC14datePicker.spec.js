const { test, expect } = require('@playwright/test')

test('verify calendar in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#datepicker').fill('23/08/2024')
    await page.waitForTimeout(3000)

})

test.only('handling datePicker in playwright', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Datepicker/index.html')
    let year = '2025'
    let month = 'May'
    let date = '10'
    await page.locator('#datepicker').click()
    console.log(`${month} ${year}`)
    //await page.waitForTimeout(3000)
    while(true){
        let monthYear = await page.locator('[class="datepicker-switch"]').first().textContent()
        console.log(monthYear)
        if(monthYear === `${month} ${year}`){
            break
        }
        await page.locator('[class="next"]').first().click()
       // await page.waitForTimeout(3000)
    }
    let dayCount = await page.locator('[class="day"]').count()
    console.log(dayCount)
    for(let i=0; i<dayCount; i++){
        let text = await page.locator('[class="day"]').nth(i).textContent()
       // console.log(text)
       if(text == date){
        await page.locator('[class="day"]').nth(i).click()
        break
       }
    }
    await page.waitForTimeout(3000)
})