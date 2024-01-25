import { Builder, WebDriver } from 'selenium-webdriver';
import { RegistrationPage } from '../src/RegistrationPage';
import { Utils } from '../src/Utils';

describe('Complete Registration Process', function() {
    this.timeout(60000);
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
        try {
            await driver.get('https://commerceos.staging.devpayever.com/registration/fashion');

            // Esperar até que a página esteja completamente carregada
            let readyState = '';
            do {
                readyState = await driver.executeScript("return document.readyState");
                await driver.sleep(5000);
            } while (readyState !== 'complete');

            // Forçar o foco no primeiro campo do formulário
            await driver.executeScript("document.querySelector('input[formcontrolname=\"firstName\"]').focus();");

            const firstName = Utils.randomString(5);
            const lastName = Utils.randomString(5);
            const email = Utils.randomEmail();
            const password = Utils.generateStrongPassword();

            // Preencher os campos do formulário e clicar no botão de inscrição
            await registrationPage.completeFirstPage(firstName, lastName, email, password);

            const companyName = "TestCompany";
            const phoneNumber = "1234567890";

            // Preencher os campos do segundo formulário e clicar no botão de submissão
            await registrationPage.completeSecondPage(companyName, phoneNumber);

            console.log(`Registration successful with username: ${email}, password: ${password}, company: ${companyName}, phone: ${phoneNumber}`);
        
        } catch (error) {
            console.log(`Error: ${error}`);
            throw error;
        }
    });
});