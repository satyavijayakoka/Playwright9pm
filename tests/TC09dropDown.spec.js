const { test, expect } = require('@playwright/test')

//Types of dropdown
// Static Dropdown
//Dynyamic dropdown

test('Handling static dropdown in playwright using selectoption',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption('2')
    let result = await page.locator('[class="subtitle"]')
    expect(result).toBeVisible()
    expect(result).toHaveText('You have selected Orange')

})
test('Handling static dropdown in playwright using label parameter',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#fruits').selectOption({label: 'Orange'})
    let result = await page.locator('[class="subtitle"]')
    expect(result).toBeVisible()
    expect(result).toHaveText('You have selected Orange')

})

test('handling static dropdown 3',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#superheros').selectOption('cm')
    let result2 = await page.locator('[class="subtitle"]')
    expect(result2).toBeVisible()
    expect(result2).toHaveText('You have selected Captain Marvel')

})

test('handling static dropdown 4',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#lang').selectOption({label: 'Swift'})
    let result3 = await page.locator('[class="subtitle"]')
    expect(result3).toBeVisible()
    expect(result3).toHaveText('You have selected Swift')

})
test.only('handling static dropdown 5',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')
    await page.locator('#country').selectOption('Chile')
})

