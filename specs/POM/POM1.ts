import { ElementFinder,element,by, browser } from "protractor";

export class POM1
{
    userNameEditBox:ElementFinder;
    passwordEditBox:ElementFinder;
    loginButton:ElementFinder;
    discoverButton:ElementFinder;
  //  public static routerComponent=browser.driver.findElement(by.xpath("//div[@id='routerComponent']/ng-component/div/div[2]/div/button"));
  routerComponent(){
    return browser.driver.findElement(by.xpath("//div[@id='routerComponent']/ng-component/div/div[2]/div/button"));
}

    constructor()
    {
        this.userNameEditBox=element(by.id("mat-input-0"));
        this.passwordEditBox=element(by.id("mat-input-1"));
        this.loginButton=element(by.css("[class='login-btn mat-button']"));
        this.discoverButton=element(by.name("Discover"));       
        
        
    }


}