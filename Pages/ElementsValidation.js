export class ElementsValidation{
    constructor(page, expect){
        this.page = page;
        this.expect = expect;
        this.mainmenulist = "//ul[@class='oxd-main-menu']//li";
        this.usernamedropdown = "//img[@class='oxd-userdropdown-img']";
    }

    // check menu list --
    async checkmainmenuList(){
      const list = await this.page.locator(this.mainmenulist).allTextContents();
      this.expect.soft(list).toBeTruthy();
      const lists = await this.page.locator(this.mainmenulist).all();
      this.expect.soft(lists.length).toBe(12);
    }

    // check links --
    async checkLinks(){
      const links = await this.page.$$("a");
      for(let link of links){
        this.expect.soft(link.getAttribute("href")).toBeTruthy();
      }
    }

    // check images --
    async checkImages(){
      const allimages = await this.page.locator("img").all();
      for(let img of allimages){
        await this.expect.soft(img).toBeVisible();
      }
    }

    // check navigation is menu list --
    async checkNavigationofMenulist(){
      const lists = await this.page.locator(this.mainmenulist).all();
      for(let menulink of lists){
        if(await menulink.textContent() !== "Maintenance"){
          await menulink.click();
          if(await this.page.locator("//h1[text()='503 Service Temporarily Unavailable']").isVisible()){
            console.log("Broken URL: "+this.page.url());
            await this.page.waitForTimeout(1000);
            await this.page.reload({waitUntil: "load"});
          }
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