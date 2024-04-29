# OrangeHRM Playwright Automation Project

Playwright automation project helps to do Sanity and Regression testing on [OrangeHRM demo website](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login). These website helps testers to perform automation practices and learning tester job.

## Table of Contents
- [OrangeHRM Playwright Automation Project](#orangeHRM-playwright-automation-project)
    - [Table of Contents](#table-of-contents)
        - [About Playwright](#about-playwright)
        - [Software Requirements and Supported platforms](#software-requirements)
        - [Playwright classes javascript file](#maven-project)
            - [Login Account](#login-account)
            - [Elements validation](#elements-validations)
            - [Add Admin](#add-admin)
            - [Add Employee](#add-employee)
            - [Add Recruitment](#add-recruitment)
        - [License](#license)
## About Playwright
[Playwright](https://playwright.dev/) Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.

### How to install and run playwright project in vs code :</br>
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
   <img src="https://res.cloudinary.com/debsobrien/image/upload/f_auto,q_auto/v1648215659/debbie.codes/blog/2022/test-report_dio73s.png" height="300" width="500" title="Playwright options cmd pallete"></br>
   
## Software Requirements 
- [Google chrome](https://www.google.com/chrome/?brand=CHBD&gclid=CjwKCAiAhqCdBhB0EiwAH8M_GmD_PXuQf4ajyAGVFnDsf1qPOQHr0SuP7KztEpC0adX9mu29qRPhLhoC5GIQAvD_BwE&gclsrc=aw.ds) v.93 onwards  
- Install [Node.js](https://nodejs.org/en/download/) to run javascript </br>
- [VS Code](https://code.visualstudio.com/download) or other IDE for javascript

## Platforms
Microsoft Windows 10 64-bit on x86-64  
MacOs-64  
Red Hat Enterprise Linux Server 7.0 64-bit on x86-64
