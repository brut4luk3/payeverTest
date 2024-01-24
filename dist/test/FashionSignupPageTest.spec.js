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
describe('Fashion Sign Up Test', function () {
    this.timeout(30000);
    let driver;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            driver = yield new selenium_webdriver_1.Builder().forBrowser('chrome').build();
        });
    });
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield driver.quit();
        });
    });
    it('Fashion Sign Up and Company Information', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const registrationPage = new RegistrationPage_1.RegistrationPage(driver);
            yield driver.get('https://commerceos.staging.devpayever.com/registration/fashion');
            // First Page Actions
            const firstName = Utils_1.Utils.randomString(5);
            const lastName = Utils_1.Utils.randomString(5);
            const email = Utils_1.Utils.randomEmail();
            const password = Utils_1.Utils.generateStrongPassword();
            yield registrationPage.enterFirstName(firstName);
            yield registrationPage.enterLastName(lastName);
            yield registrationPage.enterEmail(email);
            yield registrationPage.enterPassword(password);
            yield registrationPage.enterConfirmPassword(password);
            yield registrationPage.clickSignUp();
            yield registrationPage.waitForCompanyForm();
            // Second Page Actions
            const companyName = "TestCompany";
            const phoneNumber = "1234567890";
            yield registrationPage.enterCompanyName(companyName);
            yield registrationPage.enterPhoneNumber(phoneNumber);
            // That's just for testing purposes 'cause mr.Selenium is as wild as Joe Rogan's impersonation of a bear. Once in production, DELETE IT.
            console.log(`Test registration successful with username: ${email} and password: ${password}`);
            console.log(`Test completed with company: ${companyName}, phone: ${phoneNumber}`);
        });
    });
});
