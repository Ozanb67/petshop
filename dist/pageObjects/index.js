"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllPages = void 0;
const petPage_1 = require("./petPage");
class AllPages {
    constructor(browser) {
        this.browser = browser;
        this.petPage = new petPage_1.PetPage(this.browser);
    }
    quit() {
        this.browser.quit();
    }
}
exports.AllPages = AllPages;
