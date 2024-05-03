export class AddAdmin{
    constructor(page, expect){
        this.page = page;
        this.expect = expect;
        this.user = " ";
        this.mainmenuAdminbtn = "//ul[@class='oxd-main-menu']//li//span[text()='Admin']";
        this.addbtn = "//button[normalize-space()='Add']";
        this.userRoleInput = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//label[text()='User Role']/../..//div[@class='oxd-select-wrapper']";
        this.userRoleAdminoption = "//div[@class='oxd-select-option']//span[text()='Admin']";
        this.empnameInput = "//input[@placeholder='Type for hints...']";
        this.statusInput = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//label[text()='Status']/../..//div[@class='oxd-select-wrapper']";
        this.statusEnabledoption = "//div[@class='oxd-select-option']//span[text()='Enabled']";
        this.usernameInput = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//label[text()='Username']/../..//input";
        this.passwordInput = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//label[text()='Password']/../..//input";
        this.cpasswordInput = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//label[text()='Confirm Password']/../..//input";
        this.savebtn = "//button[normalize-space()='Save']";
        this.searchbtn = "//button[normalize-space()='Search']";
        this.searchResultText = "//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//span[@class='oxd-text oxd-text--span']";
        this.deletebtn = "//i[@class='oxd-icon bi-trash']";
        this.confirmdeletebtn = "//button[normalize-space()='Yes, Delete']";
    }

    async getAdmin(){
        await this.page.locator(this.mainmenuAdminbtn).click();
        await this.page.waitForSelector("//div[@class='oxd-table-row oxd-table-row--with-border']");
        const rows = await this.page.locator("//div[@class='oxd-table-row oxd-table-row--with-border']").all();
        let arr = [];
        for(let value of rows){
            const allrows = await value.locator("//div[@class='oxd-table-cell oxd-padding-cell']").allTextContents();
            arr.push(allrows)
        }
        const filterrows = arr.filter((elem)=>{
            return elem[2] === "Admin" && elem[4] === "Enabled";
        })
        return filterrows[(Math.floor(Math.random() * filterrows.length))][3];
    }

    async AddAdmindetails(EmpName){
        // await this.page.locator(this.mainmenuAdminbtn).click();
        await this.page.waitForSelector(this.addbtn);
        await this.page.locator(this.addbtn).click();
        await this.page.waitForSelector("//h6[normalize-space()='Add User']");
        await this.page.locator(this.userRoleInput).click();
        await this.page.locator(this.userRoleAdminoption).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.empnameInput).fill(EmpName);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
        await this.page.locator(this.statusInput).click();
        await this.page.locator(this.statusEnabledoption).click();
        this.user = `${EmpName} ${Math.floor(Math.random()*100)}`
        await this.page.locator(this.usernameInput).fill(this.user);
        await this.page.locator(this.passwordInput).fill("admin123");
        await this.page.locator(this.cpasswordInput).fill("admin123");
        await this.page.locator(this.savebtn).click();
    }

    async searchAdmin(EmpName){   
        await this.page.waitForSelector("//h5[normalize-space()='System Users']");
        await this.page.locator(this.usernameInput).fill(this.user)
        await this.page.locator(this.userRoleInput).click();
        await this.page.locator(this.userRoleAdminoption).click();
        await this.page.locator(this.empnameInput).fill(EmpName);
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press("ArrowDown");
        await this.page.keyboard.press("Enter");
        await this.page.locator(this.statusInput).click();
        await this.page.locator(this.statusEnabledoption).click();
        await this.page.locator(this.searchbtn).click();
        await this.page.waitForTimeout(2000);
        const result = await this.page.locator(this.searchResultText).textContent();
        this.expect.soft(result.match(/\d/g).toLocaleString()).toBe("1");
        await this.page.locator(this.deletebtn).click();
        await this.page.locator(this.confirmdeletebtn).click();
        await this.expect.soft(await this.page.locator("//span[normalize-space()='No Records Found']")).toBeVisible();
    }

}