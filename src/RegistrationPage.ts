import { WebDriver, By, until } from 'selenium-webdriver';

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

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    // First Page Actions
    async setInputValue(selector: By, value: string) {
        const element = await this.driver.wait(until.elementLocated(selector), 10000);
        await this.driver.executeScript("arguments[0].value = arguments[1];", element, value);
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

    async waitForCompanyForm() {
        const companyNameField = await this.driver.wait(until.elementLocated(this.companyNameInput), 10000);
        await this.driver.wait(until.elementIsVisible(companyNameField), 10000);
    }

    // Second Page Actions
    async enterCompanyName(companyName: string) {
        await this.setInputValue(this.companyNameInput, companyName);
    }

    async enterPhoneNumber(phoneNumber: string) {
        await this.setInputValue(this.phoneNumberInput, phoneNumber);
    }
}

export { RegistrationPage };