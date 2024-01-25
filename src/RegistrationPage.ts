import { WebDriver, By, until, Key } from 'selenium-webdriver';

class RegistrationPage {
    private driver: WebDriver;

    private firstNameInput = By.css('input[formcontrolname="firstName"]');
    private lastNameInput = By.css('input[formcontrolname="lastName"]');
    private emailInput = By.css('input[type="email"]');
    private passwordInput = By.css('input[formcontrolname="password"]');
    private confirmPasswordInput = By.css('input[formcontrolname="confirmPass"]');
    private signUpButton = By.css('button[type="submit"]');
    private companyNameInput = By.css('input[formcontrolname="name"]');
    private phoneNumberInput = By.css('input[formcontrolname="phoneNumber"]');
    private submitButtonSecondPage = By.css('button[type="submit"]');
    private vatNumberInput = By.css('input[formcontrolname="vatNumber"]');
    private industryDropdown = By.css('input[class="mat-autocomplete-trigger ng-tns-c142-11"]');

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async waitAndPressTab() {
        await this.driver.sleep(5000);
        await this.driver.actions().sendKeys(Key.TAB).perform();
    }

    async enterDataInInput(selector: By, value: string) {
        const element = await this.driver.wait(until.elementLocated(selector), 20000);
        await this.driver.wait(until.elementIsVisible(element), 20000);
        await element.sendKeys(value);
        await this.driver.actions().sendKeys(Key.TAB).perform();
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
        const firstInput = await this.driver.wait(until.elementLocated(this.firstNameInput), 10000);
        await this.driver.wait(until.elementIsVisible(firstInput), 10000);
        await this.driver.sleep(5000);
        await firstInput.click();
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.enterConfirmPassword(password);
    
        await this.clickSignUp();
    }    

    async completeSecondPage(companyName: string, phoneNumber: string) {
        await this.driver.wait(until.elementLocated(this.companyNameInput), 10000);
        await this.waitAndPressTab();
        await this.enterCompanyName(companyName);
        await this.driver.actions().sendKeys(Key.TAB).perform();
        await this.enterPhoneNumber(phoneNumber);
        await this.clickSubmitButton();
    }

    async completeSecondPageSantander(companyName: string, phoneNumber: string, vatNumber: string) {
        await this.selectFirstItemFromIndustryDropdown();
        await this.enterCompanyName(companyName);
        await this.enterPhoneNumber(phoneNumber);
        await this.enterDataInInput(this.vatNumberInput, vatNumber);
        await this.clickSubmitButton();
    }

    private async selectFirstItemFromIndustryDropdown() {
        const industryDropdownElement = await this.driver.wait(until.elementLocated(this.industryDropdown), 20000);
        await this.driver.wait(until.elementIsVisible(industryDropdownElement), 20000);
        await industryDropdownElement.click();
        await this.driver.sleep(1000);
        await this.driver.actions().sendKeys(Key.ARROW_DOWN).perform();
        await this.driver.actions().sendKeys(Key.ENTER).perform();
    }

    /*async navigateToThirdScreenAndValidateApps() {
        // Acessar a terceira tela
        await this.driver.get('https://commerceos.staging.devpayever.com/business/0add4cb8-5963-4719-9e5d-0f4474d7e729/info/overview');

        // Clicar no botão 'Get Started'
        const getStartedButton = By.css('button.welcome-screen-content-button');
        const button = await this.driver.wait(until.elementLocated(getStartedButton), 20000);
        await button.click();

        // Verificar a presença dos aplicativos no dashboard
        const apps = ['Transactions', 'Checkout', 'Connect', 'Products', 'Shop', 'Settings'];
        let appsPresent = [];

        for (const app of apps) {
            const appElement = By.xpath(`//div[@class='icons__title' and contains(text(), '${app}')]`);
            if (await this.driver.wait(until.elementLocated(appElement), 5000).catch(() => false)) {
                appsPresent.push(app);
            }
        }

        return appsPresent;
    }*/
}

export { RegistrationPage };