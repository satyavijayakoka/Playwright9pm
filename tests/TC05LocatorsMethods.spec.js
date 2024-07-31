const {test,expect} = require('@playwright/test')
//getbyAltText  ====>  Alt attribute value
//getByLabel  ===> label tag name ===> text ==> arial-label attribute ==> attribute value
//getByPlaceholder  ===> place holder attribute value
//getByRole  ====> role as per element and text
//getByTestId
//getByText   ====> text value
//getByTitle   ====> title attribute value
//.locator

test('verify getbyAltText in playwright',async({page})=>{
 await page.goto('https://letcode.in/test#google_vignette')
 let ele = await page.getByAltText('letcode')
 expect(ele).toBeVisible()
 await page.waitForTimeout(3000)
 expect(ele).toHaveAttribute('src','../../assets/logo.png')
 expect(ele).toHaveAttribute('alt','letcode')
})

test('verify getByLabel in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele2 = await page.getByLabel('main navigation')
     expect(ele2).toBeVisible()
     await page.waitForTimeout(3000)
     expect(ele2).toHaveAttribute('role','navigation')
})

test('verify getByPlaceholder method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    let fstName = await page.getByPlaceholder('First Name')
    expect(fstName).toBeVisible()
    await page.waitForTimeout(3000)
    expect(fstName).toHaveClass('feedback-input')
    expect(fstName).toHaveAttribute('name','first_name')
    fstName.fill('satya')
    await page.waitForTimeout(3000)

})

test('verify getByRole method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let check1 = await page.getByRole('checkbox',{name:"Option 1"})
    check1.check()
    await page.waitForTimeout(3000)
    expect(check1).toBeVisible()
    expect(check1).toHaveAttribute('type','checkbox')
    
})

test('verify getByText method in playwright ',async({page})=>{
 await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
 let txt = await page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')
 await expect(txt).toBeVisible()
 await expect(txt).toHaveId('nav-title')
 await expect(txt).toHaveClass('navbar-brand')
})

test('verify getByTitle method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let title = await page.getByTitle('Koushik Chatterjee')
    await expect(title).toBeVisible()
    await expect(title).toHaveAttribute('target','_blank')
    await expect(title).toHaveText(' Koushik Chatterjee ')
})
test.only('verify getByTestId method in playwright',async({page})=>{
    await page.goto('https://www.atlassian.com/')
    let searchIcon = await page.getByTestId('global-nav-search-icon')
    searchIcon.first().click()
    await expect(page.locator('#autocomplete-0-input')).toBeVisible()
    await page.waitForTimeout(3000)

})
