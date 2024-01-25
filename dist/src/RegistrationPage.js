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
        // Locators para os campos da primeira e segunda páginas
        this.firstNameInput = selenium_webdriver_1.By.css('input[formcontrolname="firstName"]');
        this.lastNameInput = selenium_webdriver_1.By.css('input[formcontrolname="lastName"]');
        this.emailInput = selenium_webdriver_1.By.css('input[type="email"]');
        this.passwordInput = selenium_webdriver_1.By.css('input[formcontrolname="password"]');
        this.confirmPasswordInput = selenium_webdriver_1.By.css('input[formcontrolname="confirmPass"]');
        this.signUpButton = selenium_webdriver_1.By.css('button[type="submit"]');
        this.companyNameInput = selenium_webdriver_1.By.css('input[formcontrolname="name"]');
        this.phoneNumberInput = selenium_webdriver_1.By.css('input[formcontrolname="phoneNumber"]');
        this.submitButtonSecondPage = selenium_webdriver_1.By.css('button[type="submit"]');
        this.driver = driver;
    }
    waitAndPressTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.sleep(5000); // Espera de 5 segundos
            yield this.driver.actions().sendKeys(selenium_webdriver_1.Key.TAB).perform();
        });
    }
    enterDataInInput(selector, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.driver.wait(selenium_webdriver_1.until.elementLocated(selector), 20000);
            yield this.driver.wait(selenium_webdriver_1.until.elementIsVisible(element), 20000);
            yield element.sendKeys(value);
            yield this.driver.actions().sendKeys(selenium_webdriver_1.Key.TAB).perform(); // Pressiona TAB após preencher cada campo
        });
    }
    enterFirstName(firstName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.enterDataInInput(this.firstNameInput, firstName);
        });
    }
    enterLastName(lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.enterDataInInput(this.lastNameInput, lastName);
        });
    }
    enterEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.enterDataInInput(this.emailInput, email);
        });
    }
    enterPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.enterDataInInput(this.passwordInput, password);
        });
    }
    enterConfirmPassword(confirmPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.enterDataInInput(this.confirmPasswordInput, confirmPassword);
        });
    }
    clickSignUp() {
        return __awaiter(this, void 0, void 0, function* () {
            const signUpButtonField = yield this.driver.wait(selenium_webdriver_1.until.elementLocated(this.signUpButton), 20000);
            yield this.driver.wait(selenium_webdriver_1.until.elementIsVisible(signUpButtonField), 20000);
            yield signUpButtonField.click();
        });
    }
    enterCompanyName(companyName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.enterDataInInput(this.companyNameInput, companyName);
        });
    }
    enterPhoneNumber(phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.enterDataInInput(this.phoneNumberInput, phoneNumber);
        });
    }
    clickSubmitButton() {
        return __awaiter(this, void 0, void 0, function* () {
            const submitBtn = yield this.driver.wait(selenium_webdriver_1.until.elementLocated(this.submitButtonSecondPage), 20000);
            yield this.driver.wait(selenium_webdriver_1.until.elementIsVisible(submitBtn), 20000);
            yield submitBtn.click();
        });
    }
    completeFirstPage(firstName, lastName, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // Aguarde a visibilidade do primeiro campo antes de começar a interagir
            const firstInput = yield this.driver.wait(selenium_webdriver_1.until.elementLocated(this.firstNameInput), 10000);
            yield this.driver.wait(selenium_webdriver_1.until.elementIsVisible(firstInput), 10000);
            // Aguarde 10 segundos antes de começar a interação
            yield this.driver.sleep(5000);
            // Foca no primeiro input
            yield firstInput.click();
            // Preencha os campos da primeira página
            yield this.enterFirstName(firstName);
            yield this.enterLastName(lastName);
            yield this.enterEmail(email);
            yield this.enterPassword(password);
            yield this.enterConfirmPassword(password);
            // Clique no botão de inscrição
            yield this.clickSignUp();
        });
    }
    completeSecondPage(companyName, phoneNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            // Aguarde a visibilidade do primeiro campo da segunda página antes de começar a interagir
            yield this.driver.wait(selenium_webdriver_1.until.elementLocated(this.companyNameInput), 10000);
            yield this.waitAndPressTab(); // Aguarda 5 segundos e pressiona TAB
            yield this.enterCompanyName(companyName);
            yield this.driver.actions().sendKeys(selenium_webdriver_1.Key.TAB).perform();
            yield this.enterPhoneNumber(phoneNumber);
            yield this.clickSubmitButton();
        });
    }
}
exports.RegistrationPage = RegistrationPage;
