import { browser,element,by, ElementFinder } from "protractor";
import { timeStamp } from "console";
import { protractor } from "protractor/built/ptor";
import { POM1 } from "./POM/POM1";

let pom=new POM1();

describe('Protractor Demo App', async()=> {
    it('should have a title', async(done)=> {
        
      //  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

      browser.get('https://desktop-v20q32h.npb.local:9777/');
      browser.manage().timeouts().implicitlyWait(10000);
  browser.driver.manage().window().maximize();

  //element(by.id("mat-input-0")).sendKeys("npb\\rrampal");
  pom.userNameEditBox.sendKeys("npb\\rrampal");
  //element(by.id("mat-input-1")).sendKeys("03FDf$n2");
pom.passwordEditBox.sendKeys("03FDf$n2");
  //element(by.css("[class='login-btn mat-button']")).click();
  pom.loginButton.click();

 // element(by.name("Discover")).click();
 pom.discoverButton.click();

  browser.driver.sleep(3000);
 // browser.driver.findElement(by.xpath("//div[@id='routerComponent']/ng-component/div/div[2]/div/button")).click();
pom.routerComponent().click();

 browser.driver.sleep(3000);
  
 // browser.driver.findElement(by.linkText("Show/Hide License Info")).click();
 //browser.actions().sendKeys(protractor.Key.TAB).perform();
browser.driver.findElement(by.xpath("//mat-form-field/div/div/div/input")).click();
browser.driver.findElement(by.xpath("//mat-form-field/div/div/div/input")).sendKeys("Automation2");
browser.driver.findElement(by.xpath("//mat-form-field/div/div/div/textarea")).sendKeys("Description for Scan")
browser.driver.findElement(by.css(".matTabStorageResources")).click();
browser.driver.sleep(3000);

browser.driver.findElement(by.xpath("//td[2]/div/div[2]/div/div/input")).sendKeys("isi210");
        
browser.driver.findElement(by.xpath("//td[2]/div/div[2]/div/div/input")).sendKeys(protractor.Key.TAB);
browser.driver.findElement(by.xpath("//td[3]/div/div/div/div/div/input")).sendKeys(protractor.Key.TAB);
browser.driver.findElement(by.xpath("//div/div/div/dx-data-grid/div/div[6]/div/div/div/div/table/tbody/tr/td[2]")).sendKeys(protractor.Key.SPACE);
browser.driver.findElement(by.xpath("//div/div/div/dx-data-grid/div/div[6]/div/div/div/div/table/tbody/tr/td[2]")).sendKeys(protractor.Key.TAB);
browser.driver.sleep(3000);
browser.driver.findElement(by.xpath("//dx-lookup/div/div")).sendKeys(protractor.Key.SPACE);
browser.driver.sleep(3000);
browser.driver.findElement(by.xpath("//div[2]/div/div/div/div/div[2]/div[4]/div")).click();
browser.driver.findElement(by.xpath("//div[2]/button/i")).click();
browser.driver.sleep(3000);
browser.driver.findElement(by.xpath("//td[2]/div/div[2]/div/div/input")).sendKeys("NVT_26_IOT");
browser.driver.sleep(3000);       
browser.driver.findElement(by.xpath("//div/div/div/dx-data-grid/div/div[5]/div/table/tbody/tr[2]/td[3]/div/div[2]/div/div/input")).sendKeys("NVT_26_IOT");
browser.driver.sleep(3000);  
browser.driver.findElement(by.xpath("//div/div/div/dx-data-grid/div/div[5]/div/table/tbody/tr[2]/td[3]/div/div[2]/div/div/input")).sendKeys(protractor.Key.TAB);
//browser.driver.findElement(by.xpath("//li/div/div[3]")).sendKeys(protractor.Key.TAB);
browser.driver.findElement(by.xpath("//div/div/div/dx-data-grid/div/div[6]/div/div/div/div/table/tbody/tr/td[2]")).sendKeys(protractor.Key.SPACE);
browser.driver.sleep(3000);  
browser.driver.findElement(by.className("mat-raised-button")).click();
browser.driver.sleep(10000);  
done();
    });
  });
