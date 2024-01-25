import { WebDriver, By, until, Key } from 'selenium-webdriver';

class RegistrationPage {
    private driver: WebDriver;

    // Locators para os campos da primeira e segunda páginas
    private firstNameInput = By.css('input[formcontrolname="firstName"]');
    private lastNameInput = By.css('input[formcontrolname="lastName"]');
    private emailInput = By.css('input[type="email"]');
    private passwordInput = By.css('input[formcontrolname="password"]');
    private confirmPasswordInput = By.css('input[formcontrolname="confirmPass"]');
    private signUpButton = By.css('button[type="submit"]');
    private companyNameInput = By.css('input[formcontrolname="name"]');
    private phoneNumberInput = By.css('input[formcontrolname="phoneNumber"]');
    private submitButtonSecondPage = By.css('button[type="submit"]');

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async waitAndPressTab() {
        await this.driver.sleep(5000); // Espera de 5 segundos
        await this.driver.actions().sendKeys(Key.TAB).perform();
    }

    async enterDataInInput(selector: By, value: string) {
        const element = await this.driver.wait(until.elementLocated(selector), 20000);
        await this.driver.wait(until.elementIsVisible(element), 20000);
        await element.sendKeys(value);
        await this.driver.actions().sendKeys(Key.TAB).perform(); // Pressiona TAB após preencher cada campo
    }

    async enterFirstName(firstName: string) {
        await this.enterDataInInput(this.firstNameInput, firstName);
    }

    async enterLastName(lastName: string) {
        await this.enterDataInInput(this.lastNameInput, lastName);
    }

    async enterEmail(email: string) {
        await this.enterDataInInput(this.emailInput, email);
    }

    async enterPassword(password: string) {
        await this.enterDataInInput(this.passwordInput, password);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.enterDataInInput(this.confirmPasswordInput, confirmPassword);
    }

    async clickSignUp() {
        const signUpButtonField = await this.driver.wait(until.elementLocated(this.signUpButton), 20000);
        await this.driver.wait(until.elementIsVisible(signUpButtonField), 20000);
        await signUpButtonField.click();
    }

    async enterCompanyName(companyName: string) {
        await this.enterDataInInput(this.companyNameInput, companyName);
    }

    async enterPhoneNumber(phoneNumber: string) {
        await this.enterDataInInput(this.phoneNumberInput, phoneNumber);
    }

    async clickSubmitButton() {
        const submitBtn = await this.driver.wait(until.elementLocated(this.submitButtonSecondPage), 20000);
        await this.driver.wait(until.elementIsVisible(submitBtn), 20000);
        await submitBtn.click();
    }

    async completeFirstPage(firstName: string, lastName: string, email: string, password: string) {
        // Aguarde a visibilidade do primeiro campo antes de começar a interagir
        const firstInput = await this.driver.wait(until.elementLocated(this.firstNameInput), 10000);
        await this.driver.wait(until.elementIsVisible(firstInput), 10000);
    
        // Aguarde 10 segundos antes de começar a interação
        await this.driver.sleep(5000);
    
        // Foca no primeiro input
        await firstInput.click();
    
        // Preencha os campos da primeira página
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.enterConfirmPassword(password);
    
        // Clique no botão de inscrição
        await this.clickSignUp();
    }    

    async completeSecondPage(companyName: string, phoneNumber: string) {
        // Aguarde a visibilidade do primeiro campo da segunda página antes de começar a interagir
        await this.driver.wait(until.elementLocated(this.companyNameInput), 10000);
        await this.waitAndPressTab(); // Aguarda 5 segundos e pressiona TAB
        await this.enterCompanyName(companyName);
        
        await this.driver.actions().sendKeys(Key.TAB).perform();
        
        await this.enterPhoneNumber(phoneNumber);
        await this.clickSubmitButton();
    }
}

export { RegistrationPage };