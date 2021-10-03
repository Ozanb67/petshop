import { WebDriver } from 'selenium-webdriver';
import { PetPage } from './petPage';


export class AllPages {
  public petPage: PetPage;
  private browser: WebDriver;

  constructor(browser: WebDriver) {
    this.browser = browser;
    this.petPage = new PetPage(this.browser);
  }

  public quit() {
    this.browser.quit();
  }
}