"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POM1 = void 0;
var protractor_1 = require("protractor");
var POM1 = /** @class */ (function () {
    function POM1() {
        this.userNameEditBox = protractor_1.element(protractor_1.by.id("mat-input-0"));
        this.passwordEditBox = protractor_1.element(protractor_1.by.id("mat-input-1"));
        this.loginButton = protractor_1.element(protractor_1.by.css("[class='login-btn mat-button']"));
        this.discoverButton = protractor_1.element(protractor_1.by.name("Discover"));
    }
    //  public static routerComponent=browser.driver.findElement(by.xpath("//div[@id='routerComponent']/ng-component/div/div[2]/div/button"));
    POM1.prototype.routerComponent = function () {
        return protractor_1.browser.driver.findElement(protractor_1.by.xpath("//div[@id='routerComponent']/ng-component/div/div[2]/div/button"));
    };
    return POM1;
}());
exports.POM1 = POM1;
//# sourceMappingURL=POM1.js.map