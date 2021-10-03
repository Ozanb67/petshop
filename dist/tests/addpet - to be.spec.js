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
require("mocha");
const selenium_webdriver_1 = require("selenium-webdriver");
const pageObjects_1 = require("../pageObjects");
//test case
describe("Add pet", function () {
    let pages;
    //begin van test
    before("Open browser", function () {
        pages = new pageObjects_1.AllPages(new selenium_webdriver_1.Builder().forBrowser("chrome").build());
    });
    it("Navigate to the swagger page", () => __awaiter(this, void 0, void 0, function* () {
        yield pages.petPage.navigate();
    }));
    // it("Add pet response should be empty", async() => {
    //     expect(pages.petPage.getAddNewPetResponse()).to.be.empty;
    //});
    it("Add new pet", () => __awaiter(this, void 0, void 0, function* () {
        yield pages.petPage.addNewPet();
    }));
    //  it("Add pet response should not be empty", async() => {
    //     expect(pages.petPage.getAddNewPetResponse()).to.contain('"id": 10');
    //  });
    after("Close browser", function () {
        pages.quit();
    });
});
