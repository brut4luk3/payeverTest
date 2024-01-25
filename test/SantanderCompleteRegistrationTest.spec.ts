import { Builder, WebDriver } from 'selenium-webdriver';
import { RegistrationPage } from '../src/RegistrationPage';
import { Utils } from '../src/Utils';

describe('Complete Registration Process', function() {
    this.timeout(120000);
    let driver: WebDriver;
    let registrationPage: RegistrationPage;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        registrationPage = new RegistrationPage(driver);
    });

    after(async function() {
        await driver.quit();
    });

    it('Complete Registration - Santander', async function() {
        try {
            await driver.get('https://commerceos.staging.devpayever.com/registration/santander');

            let readyState = '';
            do {
                readyState = await driver.executeScript("return document.readyState");
                await driver.sleep(5000);
            } while (readyState !== 'complete');

            const firstName = Utils.randomString(5);
            const lastName = Utils.randomString(5);
            const email = Utils.randomEmail();
            const password = Utils.generateStrongPassword();

            await registrationPage.completeFirstPage(firstName, lastName, email, password);

            const companyName = "TestCompany";
            const phoneNumber = "1234567890";
            const vatNumber = "DE123456789";

            await registrationPage.completeSecondPageSantander(companyName, phoneNumber, vatNumber);

            console.log(`Registration successful with username: ${email}, password: ${password}`);
        
        } catch (error) {
            console.log(`Error: ${error}`);
            throw error;
        }
    });
});