const config = require("../../nightwatch.conf.js");

module.exports = {
    "Test google.com": function (browser) {
      browser
        .url("https://google.com/")
        .waitForElementVisible("body", 2000)
        .setValue('input[id="fakebox-input"]', 'cat')
        .waitForElementVisible("input[type=submit]")
        .click("input[type=submit]")
        //.click('input[name=btnK]')
        //.click('input[name=btnG]')
        .waitForElementVisible("body", 2000)
        .assert.containsText('title','cat')
        .saveScreenshot(`${config.imgpath(browser)}Google-cat.png`)
        .assert.containsText('a[href="https://en.wikipedia.org/wiki/Cat"]', 'Cat - Wikipedia')
        .click('a[href="https://en.wikipedia.org/wiki/Cat"]')
        .waitForElementVisible("body", 2000)
        .assert.containsText('body','Felis catus')
        .end()
    },
};