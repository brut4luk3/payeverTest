import { Builder, WebDriver } from 'selenium-webdriver';
import { RegistrationPage } from '../src/RegistrationPage';
import { Utils } from '../src/Utils';

describe('Complete Registration Process', function() {
    this.timeout(30000);
    let driver: WebDriver;
    let registrationPage: RegistrationPage;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        registrationPage = new RegistrationPage(driver);
    });

    after(async function() {
        await driver.quit();
    });

    it('Complete Registration with Company Information', async function() {
        // Navigate to the first page and focus on the first input
        await driver.get('https://commerceos.staging.devpayever.com/registration/fashion');
        await registrationPage.setFocusOnFirstInput();

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
        await registrationPage.waitForSecondForm();

        // Fill in the second form
        const companyName = "TestCompany";
        const phoneNumber = "1234567890";

        await registrationPage.enterCompanyName(companyName);
        await registrationPage.enterPhoneNumber(phoneNumber);

        // Click the submit button on the second page
        await registrationPage.clickSubmitButton();

        console.log(`Registration successful with username: ${email}, password: ${password}, company: ${companyName}, phone: ${phoneNumber}`);
    });
});