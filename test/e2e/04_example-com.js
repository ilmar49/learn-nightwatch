const config = require("../../nightwatch.conf.js");

module.exports = {
    "Test example.com": function (browser) {
      browser
        .url("http://example.com/")
        .waitForElementVisible("body", 2000)
        .assert.containsText("body", "Example Domain")
        .assert.containsText('a[href="https://www.iana.org/domains/example"]', 'More information...')
        .saveScreenshot(`${config.imgpath(browser)}example-com.png`)
        .click('a[href="https://www.iana.org/domains/example"]')
        .waitForElementVisible("body", 2000)
        .assert.title('IANA — IANA-managed Reserved Domains')
        .saveScreenshot(`${config.imgpath(browser)}IANA.png`)
        .end();
    },
  };