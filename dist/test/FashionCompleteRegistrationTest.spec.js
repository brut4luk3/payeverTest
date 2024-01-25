"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const RegistrationPage_1 = require("../src/RegistrationPage");
const Utils_1 = require("../src/Utils");
describe('Complete Registration Process', function () {
    this.timeout(160000);
    let driver;
    let registrationPage;
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            driver = yield new selenium_webdriver_1.Builder().forBrowser('chrome').build();
            registrationPage = new RegistrationPage_1.RegistrationPage(driver);
        });
    });
    after(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield driver.quit();
        });
    });
    it('Complete Registration - Fashion', function () {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield driver.get('https://commerceos.staging.devpayever.com/registration/fashion');
                let readyState = '';
                do {
                    readyState = yield driver.executeScript("return document.readyState");
                    yield driver.sleep(5000);
                } while (readyState !== 'complete');
                yield driver.executeScript("document.querySelector('input[formcontrolname=\"firstName\"]').focus();");
                const firstName = Utils_1.Utils.randomString(5);
                const lastName = Utils_1.Utils.randomString(5);
                const email = Utils_1.Utils.randomEmail();
                const password = Utils_1.Utils.generateStrongPassword();
                yield registrationPage.completeFirstPage(firstName, lastName, email, password);
                const companyName = "TestCompany";
                const phoneNumber = "1234567890";
                yield registrationPage.completeSecondPage(companyName, phoneNumber);
                console.log(`Registration successful with username: ${email}, password: ${password}, company: ${companyName}, phone: ${phoneNumber}`);
                /*
                const appsPresent = await registrationPage.navigateToThirdScreenAndValidateApps();
                console.log(`Apps present on the dashboard: ${appsPresent.join(', ')}`);
                */
            }
            catch (error) {
                console.log(`Error: ${error}`);
                throw error;
            }
        });
    });
});
