import { WebDriver, By, until, Key } from 'selenium-webdriver';

class RegistrationPage {
    private driver: WebDriver;

    // First Page Locators
    private firstNameInput = By.css('input[formcontrolname="firstName"]');
    private lastNameInput = By.css('input[formcontrolname="lastName"]');
    private emailInput = By.css('input[type="email"]');
    private passwordInput = By.css('input[formcontrolname="password"]');
    private confirmPasswordInput = By.css('input[formcontrolname="confirmPass"]');
    private signUpButton = By.css('button[type="submit"]');

    // Second Page Locators
    private companyNameInput = By.css('input[formcontrolname="name"]');
    private phoneNumberInput = By.css('input[formcontrolname="phoneNumber"]');
    private submitButtonSecondPage = By.css('button[type="submit');

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async setFocusOnFirstInput() {
        const firstInput = await this.driver.wait(until.elementLocated(this.firstNameInput), 10000);
        await this.driver.wait(until.elementIsEnabled(firstInput), 10000); // Wait for element to be enabled
        await this.driver.wait(until.elementIsVisible(firstInput), 10000); // Wait for element to be visible
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", firstInput);
        await this.driver.executeScript("arguments[0].click();", firstInput);
    }

    async waitForSecondForm() {
        const secondFormElement = By.css('input[formcontrolname="name"]');
        await this.driver.wait(until.elementLocated(secondFormElement), 10000);
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(secondFormElement)), 10000);
    }

    async tabThroughInputs() {
        await this.driver.actions().sendKeys(Key.TAB).perform();
    }

    async setInputValue(selector: By, value: string) {
        await this.tabThroughInputs();
        const element = await this.driver.wait(until.elementLocated(selector), 10000);
        await element.sendKeys(value);
    }

    async enterFirstName(firstName: string) {
        await this.setInputValue(this.firstNameInput, firstName);
    }

    async enterLastName(lastName: string) {
        await this.setInputValue(this.lastNameInput, lastName);
    }

    async enterEmail(email: string) {
        await this.setInputValue(this.emailInput, email);
    }

    async enterPassword(password: string) {
        await this.setInputValue(this.passwordInput, password);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.setInputValue(this.confirmPasswordInput, confirmPassword);
    }

    async clickSignUp() {
        const signUpButtonField = await this.driver.wait(until.elementLocated(this.signUpButton), 10000);
        await this.driver.wait(until.elementIsVisible(signUpButtonField), 10000);
        await signUpButtonField.click();
    }

    async enterCompanyName(companyName: string) {
        const companyNameField = await this.driver.wait(until.elementLocated(this.companyNameInput), 10000);
        await this.driver.wait(until.elementIsVisible(companyNameField), 10000);
        await companyNameField.sendKeys(companyName);
    }

    async enterPhoneNumber(phoneNumber: string) {
        const phoneNumberField = await this.driver.wait(until.elementLocated(this.phoneNumberInput), 10000);
        await this.driver.wait(until.elementIsVisible(phoneNumberField), 10000);
        await phoneNumberField.sendKeys(phoneNumber);
    }

    async clickSubmitButton() {
        const submitBtn = await this.driver.wait(until.elementLocated(this.submitButtonSecondPage), 10000);
        await this.driver.wait(until.elementIsVisible(submitBtn), 10000);
        await submitBtn.click();
    }
}

export { RegistrationPage };