export default class BrokenLink {
    constructor(page) {
        this.page = page;
    }

    async url() {
        await this.page.goto("https://testautomationpractice.blogspot.com"); // Replace with the actual URL
    }    

    // Corrected spelling and method invocation
    async findLinks(){
       const links= await this.page.$$('a');
       return links;

    }
}
