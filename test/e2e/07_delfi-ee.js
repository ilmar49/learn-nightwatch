const config = require("../../nightwatch.conf.js");

module.exports = {
    "Test delfi.ee": function (browser) {
      browser
        .url("https://ekspress.delfi.ee/")
        .resizeWindow(1280, 1024)
        .waitForElementVisible("body", 5000)
        .useXpath()
        .click('//a[@href="areen"]')
        .waitForElementVisible('//li[@class="header__navigation-bottom__item"]/a[text()="Kirjandus"]')
        .click('//li[@class="header__navigation-bottom__item"]/a[text()="Kirjandus"]')
        .waitForElementVisible("//body", 2000)
        .useCss()
        .click('a.pager__button--next')
        .pause(2000)
        .click('a.pager__button--next')
        .useXpath()
        .waitForElementVisible("(//span[text()='Loe edasi'])[last()]")
        .moveToElement("(//span[text()='Loe edasi'])[last()]", 0, 0)
        .pause(2000)
        .click("(//span[text()='Loe edasi'])[last()]")
        .waitForElementVisible('//a[@class="article__listen"]')
        .assert.containsText('//a[@class="article__listen"]', "KUULA")
        .saveScreenshot(`${config.imgpath(browser)}last-article.png`)
        .end();
    },
};
