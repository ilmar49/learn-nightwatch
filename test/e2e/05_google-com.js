const config = require("../../nightwatch.conf.js");

module.exports = {
    "Test google.com": function (browser) {
      browser
        .url("https://google.com/")
        .waitForElementVisible("body", 2000)
        .setValue('input[name="q"]', 'cat')
        .keys(browser.Keys.ENTER)
        .waitForElementVisible("body", 2000)
        .assert.titleContains('cat')
        .saveScreenshot(`${config.imgpath(browser)}Google-cat.png`)
        .assert.containsText('a[href="https://en.wikipedia.org/wiki/Cat"]', 'Cat - Wikipedia')
        .click('a[href="https://en.wikipedia.org/wiki/Cat"]')
        .waitForElementVisible("body", 2000)
        .assert.containsText('body', 'Felis catus')
        .end();
    },
};
