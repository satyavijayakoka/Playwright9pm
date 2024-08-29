const { test, expect } = require('@playwright/test')

test('verify datepicker with js values in playwright',async({page})=>{
 await page.goto('https://webdriveruniversity.com/Datepicker/index.html')
 const date = new Date()
 //date.setDate(date.getDate())
 date.setDate(date.getDate() + 200) // for current date i added 200days
//  console.log(date.getDate()) // it gives Current date i.e., todays date =28
//  console.log(date.getMonth()) // it gives index of current month = 7
//  console.log(date.getFullYear()) // it gives current year = 2024

     //0   1     2     3      4     5    6     7
    //jan feb  march  april  may  june  july  Aug

    let d = date.getDate()
    let m = date.getMonth() + 1 // which gives current month (as 3 march)
    let y = date.getFullYear()
    console.log(m)  // 3 means march not index 
    //let mnth = date.toLocaleString('default',{month:'short'}) // current month in short string form as "Mar"
    let mnth = date.toLocaleString('default',{month:'long'})  // current month in long string form as "March"
    console.log(mnth)

    // 24/03/2025
    let mm = `${0}${m}`
    console.log(mm) // 03

    // DD/MM/YY
    let DD = `${d}/${m}/${y}`
    console.log(DD)

    let futureMntYear = `${mnth} ${y}`
    console.log(futureMntYear)

    await page.locator('#datepicker').click()
    while(true){
        let monthYear = await page.locator('[class="datepicker-switch"]').first().textContent()
        console.log(monthYear)
        if(monthYear === futureMntYear){
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
       if(text == d){
        await page.locator('[class="day"]').nth(i).click()
        break
       }
    }
    await page.waitForTimeout(3000)
})