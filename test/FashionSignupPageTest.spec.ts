import { Builder, WebDriver, Key } from 'selenium-webdriver';
import { RegistrationPage } from '../src/RegistrationPage';
import { Utils } from '../src/Utils';

describe('Fashion Sign Up Test', function() {
    this.timeout(30000);
    let driver: WebDriver;

    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async function() {
        await driver.quit();
    });

    it('Fashion Sign Up', async function() {
        const registrationPage = new RegistrationPage(driver);
        await driver.get('https://commerceos.staging.devpayever.com/registration/fashion');

        // First Page Actions
        const firstName = Utils.randomString(5);
        const lastName = Utils.randomString(5);
        const email = Utils.randomEmail();
        const password = Utils.generateStrongPassword();

        await registrationPage.enterFirstName(firstName);
        await registrationPage.enterLastName(lastName);
        await registrationPage.enterEmail(email);
        await registrationPage.enterPassword(password);
        await registrationPage.enterConfirmPassword(password);

        await registrationPage.clickSignUp();

        /*
        await registrationPage.waitForCompanyForm();

        // Second Page Actions
        
        const companyName = "TestCompany";
        const phoneNumber = "1234567890";

        await registrationPage.enterCompanyName(companyName);
        await registrationPage.enterPhoneNumber(phoneNumber);
        

        // That's just for testing purposes 'cause mr.Selenium is as wild as Joe Rogan's impersonation of a bear. Once in production, DELETE IT.
        console.log(`Test completed with company: ${companyName}, phone: ${phoneNumber}`);
        */

        console.log(`Test registration successful with username: ${email} and password: ${password}`);
    });
})