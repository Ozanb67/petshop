import { expect } from "chai";
import "mocha";
import { Builder } from "selenium-webdriver";
import { AllPages } from "../pageObjects";

describe("Add & get pet", function() {
    let pages: AllPages;

    before("Open browser", function() {
        pages = new AllPages(new Builder().forBrowser("chrome").build());
    });

    it("Navigate to the swagger page", async() => {
        await pages.petPage.navigate();
    });

    it("Add new pet", async() => {
        await pages.petPage.addNewPet();
    });

    it("Get new pet", async() => {
        await pages.petPage.getNewPet();
    });

    after("Close browser", function() {
        pages.quit();
    });
});
