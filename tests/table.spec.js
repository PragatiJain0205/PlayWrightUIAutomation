//@ts-check
const{test,expect}=require('@playwright/test')

test.describe("Test Table", async() =>{
    test('static table',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com')
        const table = await page.locator('table[name="BookTable"]')
        //no of rows
        const row = await table.locator('tr' )
        console.log("Number of rows : " ,await row.count())
        //no of column
        const column= await table.locator('tbody tr th')
        console.log("Nmber of column : ", await column.count())
        console.log(row)
        //Get value from column
        const matchedRow = await row.filter({
            has: page.locator('td'),
            hasText: "Master In Selenium"
        }); // This ensures you get the first matched row
        
        console.log("Matched Row Found: ", await matchedRow.textContent());
    })

})