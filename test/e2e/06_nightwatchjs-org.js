const config = require("../../nightwatch.conf.js");

module.exports = {
    "Test nightwatchjs.org": function (browser) {
      browser
        .url("https://nightwatchjs.org/")
        .waitForElementVisible("body", 2000)
        .resizeWindow(1280,1024)
        .useXpath()
        .click('//div[@id="navbar"]//a[text()="API Reference"]')
        .pause(3000)
        .click('//a[@href="/api/expect/"]')
        .pause(3000)
        .click('//a[@href="#expect-elements-count"]')
        .pause(3000)
        .useCss()
        .assert.containsText('id="expect-elements-count"', '.elements().count')     //ei ole kindel, kas käib nii
        .saveScreenshot(`${config.imgpath(browser)}nightwatch.png`)
        .end()
    },
};