import { BasePage } from "./basePage";
import { WebDriver, By, until } from "selenium-webdriver";

export class PetPage extends BasePage{
    
    private addPetBlock = By.css("#operations-pet-addPet .opblock-summary-control");
    private addPetTryOutBtn = By.css("#operations-pet-addPet .try-out__btn");
    private addPetExecuteBtn = By.css("#operations-pet-addPet .execute");
    private addPetJson = By.css(".body-param__text");
    private newPetInfo = '{"id": 15, "name": "bunnie", "category": {"id": 1, "name": "Bunnies" }, "photoUrls": ["string"], "tags": [{ "id": 0, "name": "string" }], "status": "available"}';
    private getPetBlock = By.css("#operations-pet-getPetById .opblock-summary-control");
    private getPetTryOutBtn = By.css("#operations-pet-getPetById .try-out__btn");
    private idField = By.css("[placeholder='petId']");
    private getPetExecute = By.css("#operations-pet-getPetById .execute");

    //super is een constructor van de kernklasse om ervoor te zorgen dat de driver opgehaald kan worden van de parent(basePage) naar de childklasse(petPage)
    constructor(driver: WebDriver) {
        super(driver);
    }

    //wachten op het element addPetBlock om te verzekeren dat de pagina is ingeladen
    public async navigate() {
        super.navigate();
        await this.driver.wait(until.elementLocated(this.addPetBlock), 20000);
    }

    public async clickAddPetBlock() {
        await this.driver.findElement(this.addPetBlock).click();
    }

    public async clickAddPetTryOutBtn() {
        await this.driver.wait(until.elementLocated(this.addPetTryOutBtn)).click();
    }

    public async clickAddPetExecuteBtn() {
        await this.driver.findElement(this.addPetExecuteBtn).click();
    }

    public async addNewPet() {
        await this.clickAddPetBlock();
        await this.clickAddPetTryOutBtn();
        await this.driver.findElement(this.addPetJson).clear();
        await this.driver.findElement(this.addPetJson).sendKeys(this.newPetInfo);
        await this.clickAddPetExecuteBtn();
        await this.driver.sleep(2000);
        await this.clickAddPetBlock();
    }

    public async clickGetPetBlock(){
        await this.driver.findElement(this.getPetBlock).click();
    }

    public async clickGetPetTryOut() {
        await this.driver.wait(until.elementLocated(this.getPetTryOutBtn)).click();
    }

    public async fillInId() {
        await this.driver.findElement(this.idField).sendKeys("15");
    }

    public async clickGetPetExecute() {
        await this.driver.findElement(this.getPetExecute).click();
    }

    public async getNewPet() {
        await this.clickGetPetBlock();
        await this.clickGetPetTryOut();
        await this.fillInId();
        await this.clickGetPetExecute();
        await this.driver.sleep(5000);
    }

}