import { expect } from "chai";
import "mocha";
import { Builder } from "selenium-webdriver";
import { AllPages } from "../pageObjects";


//test case
describe("Add pet", function() {
    let pages: AllPages;

    //begin van test
    before("Open browser", function() {
        pages = new AllPages(new Builder().forBrowser("chrome").build());
    });

    it("Navigate to the swagger page", async() => {
        await pages.petPage.navigate();
    });

  // it("Add pet response should be empty", async() => {
   //     expect(pages.petPage.getAddNewPetResponse()).to.be.empty;
  //});

    it("Add new pet", async() => {
        await pages.petPage.addNewPet();
    });

  //  it("Add pet response should not be empty", async() => {
   //     expect(pages.petPage.getAddNewPetResponse()).to.contain('"id": 10');
  //  });

    after("Close browser", function() {
        pages.quit();
    });
});