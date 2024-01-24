import { Builder, WebDriver } from 'selenium-webdriver';
import { RegistrationPage } from '../src/RegistrationPage';
import { Utils } from '../src/Utils';

describe('Company Information Test', function() {
    this.timeout(30000);
    let driver: WebDriver;

    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('Fill Company Information', async function() {
        const companyInfoPage = new RegistrationPage(driver);
        await driver.get('https://commerceos.staging.devpayever.com/...');

        // Actions specific to the second page
        const companyName = "TestCompany";
        const phoneNumber = "1234567890";

        await companyInfoPage.enterCompanyName(companyName);
        await companyInfoPage.enterPhoneNumber(phoneNumber);

        // Additional steps and validations...

        console.log(`Company Info Test completed with company: ${companyName}, phone: ${phoneNumber}`);
    });
});