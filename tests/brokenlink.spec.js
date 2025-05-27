//ts-@check

const{expect,test}=require("@playwright/test")
import BrokenLink from "../pages/BrokenLink"


test("Find Broken Link", async({page})=>{
    test.setTimeout(60000); // Set timeout to 60 seconds

    const brokenLink = new BrokenLink(page);

    await brokenLink.url();
    const links=await brokenLink.findLinks();
    for(const link of links){
        
        const value=await link.getAttribute('href');
        if(value && value.startsWith('http')){
            const res=await page.request.get(value);
            if (res.status()>=400){
                console.log(`Broken link is ${link} and status code is ${res.status()}`)
            }
        }

        
        
    }



})