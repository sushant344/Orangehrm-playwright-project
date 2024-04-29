export class AddEmployee{
    constructor(page, expect){
        this.page = page;
        this.expect = expect;
        this.PIMselector = "//ul[@class='oxd-main-menu']//li//span[text()='PIM']";
        this.addempbtn = "//button[normalize-space()='Add']";
        this.empidInput = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']";
        this.empSavebtn = "//button[normalize-space()='Save']";
        this.empListbtn = "//a[normalize-space()='Employee List']";
        this.empidSearchInput = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']";
        this.empSearchbtn = "//button[normalize-space()='Search']";
    }

    async addEmployee(fname, lname){
        await this.page.locator(this.PIMselector).click();
        await this.page.waitForSelector(this.addempbtn);
        await this.page.locator(this.addempbtn).click();
        await this.page.getByPlaceholder("First Name").fill(fname);
        await this.page.getByPlaceholder("Last Name").fill(lname);
        const empidInput = this.page.locator(this.empidInput);
        // await empidInput.click();
        let empid = await empidInput.inputValue();
        console.log(empid);
        empid = "0"+(Number(empid)+1).toLocaleString();
        await empidInput.fill(empid);
        //! empid can be already exist, increase it by +1
        // empid = await empidInput.inputValue();
        console.log(empid);
        console.log(typeof empid);
        await this.page.locator(this.empSavebtn).click();
        await this.page.waitForSelector("//div[@class='orangehrm-edit-employee-name']");
        await this.page.locator(this.empListbtn).click();
        // await this.page.locator("//div[@class='--toggle']//button[@type='button']").click();
        await this.page.locator(this.empidSearchInput).fill(empid);
        await this.page.locator(this.empSearchbtn).click();
        await this.page.waitForTimeout(2000);
        const result = await this.page.locator("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//span[@class='oxd-text oxd-text--span']").textContent();
        this.expect(result.match(/\d/g).toLocaleString()).toBe("1");
    }
}