import { Builder, WebDriver } from 'selenium-webdriver';
import { RegistrationPage } from '../src/RegistrationPage';
import { Utils } from '../src/Utils';

describe('Complete Registration Process', function() {
    this.timeout(160000);
    let driver: WebDriver;
    let registrationPage: RegistrationPage;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        registrationPage = new RegistrationPage(driver);
    });

    after(async function() {
        await driver.quit();
    });

    it('Complete Registration - Fashion', async function() {
        try {
            await driver.get('https://commerceos.staging.devpayever.com/registration/fashion');

            let readyState = '';
            do {
                readyState = await driver.executeScript("return document.readyState");
                await driver.sleep(5000);
            } while (readyState !== 'complete');

            await driver.executeScript("document.querySelector('input[formcontrolname=\"firstName\"]').focus();");

            const firstName = Utils.randomString(5);
            const lastName = Utils.randomString(5);
            const email = Utils.randomEmail();
            const password = Utils.generateStrongPassword();

            await registrationPage.completeFirstPage(firstName, lastName, email, password);

            const companyName = "TestCompany";
            const phoneNumber = "1234567890";

            await registrationPage.completeSecondPage(companyName, phoneNumber);

            console.log(`Registration successful with username: ${email}, password: ${password}, company: ${companyName}, phone: ${phoneNumber}`);

            /*
            const appsPresent = await registrationPage.navigateToThirdScreenAndValidateApps();
            console.log(`Apps present on the dashboard: ${appsPresent.join(', ')}`);
            */
        
        } catch (error) {
            console.log(`Error: ${error}`);
            throw error;
        }
    });
});