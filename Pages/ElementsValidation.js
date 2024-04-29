export class ElementsValidation{
    constructor(page, expect){
        this.page = page;
        this.expect = expect;
        this.mainmenulist = "//ul[@class='oxd-main-menu']//li";
    }

    // check menu list --
    async checkmainmenuList(){
        const list = await this.page.locator(this.mainmenulist).allTextContents();
        this.expect(list).toBeTruthy();
        const lists = await this.page.locator(this.mainmenulist).all();
        this.expect(lists.length).toBe(12);
    }

    // check links --
    async checkLinks(){
        const links = await this.page.$$("a");
        for(let link of links){
          this.expect(link.getAttribute("href")).toBeTruthy();
        }
    }

    // check images --
    async checkImages(){
        const images = await this.page.$$("img");
        for(let img of images){
            this.expect(img.getAttribute("src")).toBeTruthy();
        }
    }

    // check navigation is menu list --
    async checkNavigationofMenulist(){
        const lists = await this.page.locator(this.mainmenulist).all();
        for(let menulink of lists){
          if(await menulink.textContent() !== "Maintenance"){
            await menulink.click();
            await this.checkLinks();
            await this.checkImages();
            await this.page.waitForTimeout(2000);
          }
          else{
            await menulink.click();
            await this.page.goBack();
          }
        }
    }

}