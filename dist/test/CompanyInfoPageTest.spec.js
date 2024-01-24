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
describe('Company Information Test', function () {
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
    it('Fill Company Information', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const companyInfoPage = new RegistrationPage_1.RegistrationPage(driver);
            yield driver.get('https://commerceos.staging.devpayever.com/...');
            // Actions specific to the second page
            const companyName = "TestCompany";
            const phoneNumber = "1234567890";
            yield companyInfoPage.enterCompanyName(companyName);
            yield companyInfoPage.enterPhoneNumber(phoneNumber);
            // Additional steps and validations...
            console.log(`Company Info Test completed with company: ${companyName}, phone: ${phoneNumber}`);
        });
    });
});
