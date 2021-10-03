import { WebDriver } from "selenium-webdriver";

export class BasePage {
    protected driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    public async navigate(){
        await this.driver.navigate().to("https://petstore3.swagger.io/");
    }
}