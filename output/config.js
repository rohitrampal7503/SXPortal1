"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: 'chrome',
        acceptInsecureCerts: true
    },
    specs: ['./specs/*.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: true
};
//# sourceMappingURL=config.js.map