import { browser, element, by, promise, ElementFinder } from 'protractor';


export class AppComponentPage {

  constructor(){
    browser.manage().window().setSize(1200, 900);
    //browser.driver.sleep(3000);
  }

  public navigateTo() {
    browser.get('http://localhost:8501/');
  }

  public clickLink(button: string){
    browser.driver.sleep(2000);
    element(by.linkText(button)).click();
  }

  public getHeaderText() {
    return element(by.css('app h1')).getText();
  }

  public getParagraphText() {
    //browser.driver.sleep(3000);
    return element(by.css('app header h3')).getText();
  }


}
