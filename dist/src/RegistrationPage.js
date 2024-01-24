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
exports.RegistrationPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
class RegistrationPage {
    constructor(driver) {
        // First Page Locators
        this.firstNameInput = selenium_webdriver_1.By.css('input[formcontrolname="firstName"]');
        this.lastNameInput = selenium_webdriver_1.By.css('input[formcontrolname="lastName"]');
        this.emailInput = selenium_webdriver_1.By.css('input[type="email"]');
        this.passwordInput = selenium_webdriver_1.By.css('input[formcontrolname="password"]');
        this.confirmPasswordInput = selenium_webdriver_1.By.css('input[formcontrolname="confirmPass"]');
        this.signUpButton = selenium_webdriver_1.By.css('button[type="submit"]');
        // Second Page Locators
        this.companyNameInput = selenium_webdriver_1.By.css('input[formcontrolname="name"]');
        this.phoneNumberInput = selenium_webdriver_1.By.css('input[formcontrolname="phoneNumber"]');
        this.driver = driver;
    }
    // First Page Actions
    setInputValue(selector, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.driver.wait(selenium_webdriver_1.until.elementLocated(selector), 10000);
            yield this.driver.executeScript("arguments[0].value = arguments[1];", element, value);
        });
    }
    enterFirstName(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setInputValue(this.firstNameInput, firstName);
        });
    }
    enterLastName(lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setInputValue(this.lastNameInput, lastName);
        });
    }
    enterEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setInputValue(this.emailInput, email);
        });
    }
    enterPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setInputValue(this.passwordInput, password);
        });
    }
    enterConfirmPassword(confirmPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setInputValue(this.confirmPasswordInput, confirmPassword);
        });
    }
    clickSignUp() {
        return __awaiter(this, void 0, void 0, function* () {
            const signUpButtonField = yield this.driver.wait(selenium_webdriver_1.until.elementLocated(this.signUpButton), 10000);
            yield this.driver.wait(selenium_webdriver_1.until.elementIsVisible(signUpButtonField), 10000);
            yield signUpButtonField.click();
        });
    }
    waitForCompanyForm() {
        return __awaiter(this, void 0, void 0, function* () {
            const companyNameField = yield this.driver.wait(selenium_webdriver_1.until.elementLocated(this.companyNameInput), 10000);
            yield this.driver.wait(selenium_webdriver_1.until.elementIsVisible(companyNameField), 10000);
        });
    }
    // Second Page Actions
    enterCompanyName(companyName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setInputValue(this.companyNameInput, companyName);
        });
    }
    enterPhoneNumber(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setInputValue(this.phoneNumberInput, phoneNumber);
        });
    }
}
exports.RegistrationPage = RegistrationPage;
