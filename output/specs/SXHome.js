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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ptor_1 = require("protractor/built/ptor");
var POM1_1 = require("./POM/POM1");
var pom = new POM1_1.POM1();
describe('Protractor Demo App', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        it('should have a title', function (done) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
                protractor_1.browser.get('https://desktop-v20q32h.npb.local:9777/');
                protractor_1.browser.manage().timeouts().implicitlyWait(10000);
                protractor_1.browser.driver.manage().window().maximize();
                //element(by.id("mat-input-0")).sendKeys("npb\\rrampal");
                pom.userNameEditBox.sendKeys("npb\\rrampal");
                //element(by.id("mat-input-1")).sendKeys("03FDf$n2");
                pom.passwordEditBox.sendKeys("03FDf$n2");
                //element(by.css("[class='login-btn mat-button']")).click();
                pom.loginButton.click();
                // element(by.name("Discover")).click();
                pom.discoverButton.click();
                protractor_1.browser.driver.sleep(3000);
                // browser.driver.findElement(by.xpath("//div[@id='routerComponent']/ng-component/div/div[2]/div/button")).click();
                pom.routerComponent().click();
                protractor_1.browser.driver.sleep(3000);
                // browser.driver.findElement(by.linkText("Show/Hide License Info")).click();
                //browser.actions().sendKeys(protractor.Key.TAB).perform();
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//mat-form-field/div/div/div/input")).click();
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//mat-form-field/div/div/div/input")).sendKeys("Automation2");
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//mat-form-field/div/div/div/textarea")).sendKeys("Description for Scan");
                protractor_1.browser.driver.findElement(protractor_1.by.css(".matTabStorageResources")).click();
                protractor_1.browser.driver.sleep(3000);
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//td[2]/div/div[2]/div/div/input")).sendKeys("isi210");
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//td[2]/div/div[2]/div/div/input")).sendKeys(ptor_1.protractor.Key.TAB);
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//td[3]/div/div/div/div/div/input")).sendKeys(ptor_1.protractor.Key.TAB);
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//div/div/div/dx-data-grid/div/div[6]/div/div/div/div/table/tbody/tr/td[2]")).sendKeys(ptor_1.protractor.Key.SPACE);
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//div/div/div/dx-data-grid/div/div[6]/div/div/div/div/table/tbody/tr/td[2]")).sendKeys(ptor_1.protractor.Key.TAB);
                protractor_1.browser.driver.sleep(3000);
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//dx-lookup/div/div")).sendKeys(ptor_1.protractor.Key.SPACE);
                protractor_1.browser.driver.sleep(3000);
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//div[2]/div/div/div/div/div[2]/div[4]/div")).click();
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//div[2]/button/i")).click();
                protractor_1.browser.driver.sleep(3000);
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//td[2]/div/div[2]/div/div/input")).sendKeys("NVT_26_IOT");
                protractor_1.browser.driver.sleep(3000);
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//div/div/div/dx-data-grid/div/div[5]/div/table/tbody/tr[2]/td[3]/div/div[2]/div/div/input")).sendKeys("NVT_26_IOT");
                protractor_1.browser.driver.sleep(3000);
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//div/div/div/dx-data-grid/div/div[5]/div/table/tbody/tr[2]/td[3]/div/div[2]/div/div/input")).sendKeys(ptor_1.protractor.Key.TAB);
                //browser.driver.findElement(by.xpath("//li/div/div[3]")).sendKeys(protractor.Key.TAB);
                protractor_1.browser.driver.findElement(protractor_1.by.xpath("//div/div/div/dx-data-grid/div/div[6]/div/div/div/div/table/tbody/tr/td[2]")).sendKeys(ptor_1.protractor.Key.SPACE);
                protractor_1.browser.driver.sleep(3000);
                protractor_1.browser.driver.findElement(protractor_1.by.className("mat-raised-button")).click();
                protractor_1.browser.driver.sleep(10000);
                done();
                return [2 /*return*/];
            });
        }); });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=SXHome.js.map