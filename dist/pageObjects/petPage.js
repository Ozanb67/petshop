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
exports.PetPage = void 0;
const basePage_1 = require("./basePage");
const selenium_webdriver_1 = require("selenium-webdriver");
class PetPage extends basePage_1.BasePage {
    //super is een constructor van de kernklasse om ervoor te zorgen dat de driver opgehaald kan worden van de parent(basePage) naar de childklasse(petPage)
    constructor(driver) {
        super(driver);
        this.addPetBlock = selenium_webdriver_1.By.css("#operations-pet-addPet .opblock-summary-control");
        this.addPetTryOutBtn = selenium_webdriver_1.By.css("#operations-pet-addPet .try-out__btn");
        this.addPetExecuteBtn = selenium_webdriver_1.By.css("#operations-pet-addPet .execute");
        this.addPetJson = selenium_webdriver_1.By.css(".body-param__text");
        this.newPetInfo = '{"id": 15, "name": "bunnie", "category": {"id": 1, "name": "Bunnies" }, "photoUrls": ["string"], "tags": [{ "id": 0, "name": "string" }], "status": "available"}';
        this.getPetBlock = selenium_webdriver_1.By.css("#operations-pet-getPetById .opblock-summary-control");
        this.getPetTryOutBtn = selenium_webdriver_1.By.css("#operations-pet-getPetById .try-out__btn");
        this.idField = selenium_webdriver_1.By.css("[placeholder='petId']");
        this.getPetExecute = selenium_webdriver_1.By.css("#operations-pet-getPetById .execute");
    }
    //wachten op het element addPetBlock om te verzekeren dat de pagina is ingeladen
    navigate() {
        const _super = Object.create(null, {
            navigate: { get: () => super.navigate }
        });
        return __awaiter(this, void 0, void 0, function* () {
            _super.navigate.call(this);
            yield this.driver.wait(selenium_webdriver_1.until.elementLocated(this.addPetBlock), 20000);
        });
    }
    clickAddPetBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.findElement(this.addPetBlock).click();
        });
    }
    clickAddPetTryOutBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.wait(selenium_webdriver_1.until.elementLocated(this.addPetTryOutBtn)).click();
        });
    }
    clickAddPetExecuteBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.findElement(this.addPetExecuteBtn).click();
        });
    }
    addNewPet() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clickAddPetBlock();
            yield this.clickAddPetTryOutBtn();
            yield this.driver.findElement(this.addPetJson).clear();
            yield this.driver.findElement(this.addPetJson).sendKeys(this.newPetInfo);
            yield this.clickAddPetExecuteBtn();
            yield this.driver.sleep(2000);
            yield this.clickAddPetBlock();
        });
    }
    clickGetPetBlock() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.findElement(this.getPetBlock).click();
        });
    }
    clickGetPetTryOut() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.wait(selenium_webdriver_1.until.elementLocated(this.getPetTryOutBtn)).click();
        });
    }
    fillInId() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.findElement(this.idField).sendKeys("15");
        });
    }
    clickGetPetExecute() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.findElement(this.getPetExecute).click();
        });
    }
    getNewPet() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clickGetPetBlock();
            yield this.clickGetPetTryOut();
            yield this.fillInId();
            yield this.clickGetPetExecute();
            yield this.driver.sleep(5000);
        });
    }
}
exports.PetPage = PetPage;
