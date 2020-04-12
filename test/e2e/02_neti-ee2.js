const config = require("../../nightwatch.conf.js");

module.exports = {
    "Neti.ee -> loomakaitse.eu": function (browser) {
      browser
        .url("https://www.neti.ee/")
        .waitForElementVisible("body", 2000)
        .setValue("input[name=query]", "kass")          //write "kass" to search box
        .click("input[type=submit]")                    // Click the search button
        .waitForElementVisible("body", 2000)
        .useXpath()
        .assert.containsText("a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']", "Koduloomad")
        .click("a[@href='/cgi-bin/teema/MEELELAHUTUS_JA_HOBID/Koduloomad/']")
        .waitForElementVisible("//body", 2000)
        .click("//a[@href='http://loomakaitse.eu/']")
        .waitForElementVisible("//body", 2000)
        .assert.containsUrl("//a[@href='http://loomakaitse.eu']")
        .saveScreenshot(`${config.imgpath(browser)}loomakaitse-eu.png`)
        .end()
    },
};