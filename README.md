# OrangeHRM Playwright Automation Project

Playwright automation project helps to do Sanity and Regression testing on [OrangeHRM demo website](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login). These website helps testers to perform automation practices and learning tester job.

<img src="https://www.orangehrm.com/assets/Uploads/Recruitment-ATS-Starter.webp" height="250" width="500" border="2px solid red" title="Orangehrm demo webpage">

## Table of Contents
- [OrangeHRM Playwright Automation Project](#orangehrm-playwright-automation-project)
    - [Table of Contents](#table-of-contents)
        - [Test Documentations](#test-documentations)
            - [Test cases](#test-cases)
        - [About Playwright](#about-playwright)
            - [How to install and run playwright project](#how-to-install-and-run-playwright-project-in-vs-code)
        - [Software Requirements and Supported platforms](#software-requirements)
        - [Playwright Project Javascript Classes Files](#playwright-pages)
            - [Login Account](#login-page)
            - [Elements validation](#elements-validations)
            - [Admin Page](#admin-page)
            - [PIM Page](#pim-page)
            - [Recruitment Page](#recruitment-page)
        - [License](#license)
## Test Documentations
### Test cases
In [Test cases google sheets](https://docs.google.com/spreadsheets/d/1fmo0jnqB3JmEo_N_FLTYuVMx_YjIy4j_HHYslDaNru0/edit?usp=sharing) we created test scenarios and according to write test cases for various modules which mention [below](#playwright-pages). In this documention take notes which case show what result like which cases has passed and failed.

## About Playwright
[Playwright](https://playwright.dev/) Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.

### How to install and run playwright project in VS code
**1.** Open VS code and go to **"View > Command Pallete"** or ``` Ctrl + Shift + P ```</br>

**2.** Search and select **"Install Playwright"** command then select checkboxes only whichever you wants - Browsers, Typescript or Javascript and github. It will install all needed playwright packages.

<img src="https://miro.medium.com/v2/resize:fit:1400/1*qhq9IchY4htEom0KmyizZQ.png" height="250" width="500" border="2px solid red" title="Playwright options cmd pallete"></br>

**3.** By default, "tests" folder is test directory whichever files are in "tests" folder will run all in headless mode.</br>
**4.** To run all test files in "tests" folder, run command in terminal - 
   ```
   npx playwright test
   ```
**5.** To run in headed mode -
   ```
   npx playwright test --headed
   ```
**6.** Get test result report in html format (note: first run tests then you can get report) -
   ```
   npx playwright show-report
   ```
   <img src="https://res.cloudinary.com/debsobrien/image/upload/f_auto,q_auto/v1648215659/debbie.codes/blog/2022/test-report_dio73s.png" height="300" width="500" title="Playwright html report"></br>
   
### Software Requirements 
- [Google chrome](https://www.google.com/chrome/?brand=CHBD&gclid=CjwKCAiAhqCdBhB0EiwAH8M_GmD_PXuQf4ajyAGVFnDsf1qPOQHr0SuP7KztEpC0adX9mu29qRPhLhoC5GIQAvD_BwE&gclsrc=aw.ds) v.93 onwards  
- Install [Node.js](https://nodejs.org/en/download/) to run javascript </br>
- [VS Code](https://code.visualstudio.com/download) or other IDE for javascript

### Platforms
Microsoft Windows 10 64-bit on x86-64  
MacOs-64  
Red Hat Enterprise Linux Server 7.0 64-bit on x86-64

## Playwright Pages
To test various operations and actions on web pages, we have created class contains javascript pages so we can reuse functions and variables. In that pages created instance of inbuilt variables like page, expect, locators and async functions.
- Created instance in [orangehrm.spec.js](.//tests//Orangehrm.spec.js) file to invoke classes functions.
- In this using [beforeEach](https://playwright.dev/docs/api/class-test#test-before-each) and [afterEach](https://playwright.dev/docs/api/class-test#test-after-each) method which run before and after test of every test excution with run parallel mode so it can execute all tests faster.
  
### Login Page
- On orangehrm website login page has provided username and password, in this file performing various validations to login with valid and invalid username and password.
- Also logging out after tests has been done. You can see code on [Login page](.//Pages//LoginPage.js)
### Elements Validations
- In this we are testing image, links and contents is visible and length as per expections.
- Checking above test on each menu list items. You can see code on [Elements Validation](.//Pages//ElementsValidation.js)
### Admin Page
- Orangehrm has access to add another admin by entering existing admin name and password.
- After adding verifying added details are valid. You can see code on [Admin Page](.//Pages//AddAdmin.js)
### PIM Page
- Verify able to add and delet employee details and able to search added employee is exist by searching id which will generate by system. You can see code on [PIM Page](.//Pages//AddEmployee.js).
### Recruitment Page
- Verify able to add vacancy name with their valid hiring manager, currently job title is QA engineer selected.
- Then able to search job details by entering deatils. You can see code on[Recruitment Page](.//Pages//AddVacancy.js)

## License

<h4 style="color:red">Note: This repository has some issues in code... work in progress</h4>
