const config = require("../../nightwatch.conf.js");

module.exports = {
    "Test nightwatchjs.org": function (browser) {
      browser
        .url("https://ekspress.delfi.ee/")
        .waitForElementVisible("body", 2000)
        .click('a[href="https://ekspress.delfi.ee/areen"]')
        .waitForElementVisible("body", 2000)
        .click('a[href="https://ekspress.delfi.ee/teema/kirjandus"]')
        .waitForElementVisible("body", 2000)
        .click('a[href="https://ekspress.delfi.ee/teema/kirjandus?page=3"]')
        .waitForElementVisible("body", 2000)
        //open last article from listing

        .assert.containsElement('i.icon.icon--sound.icon--sound-dark')
        .saveScreenshot(`${config.imgpath(browser)}last-article.png`)
        //unable to "Scroll to "Loe veel" section", because section is missing. Scrolling to "Seotud lood" instead
        .assert.containsText('Seotud lood').scrollIntoView()
        //open first article


        .waitForElementVisible("body", 2000)
        .assert.containsElement('i.icon.icon--sound.icon--sound-dark')
        .useXpath()
        .assert.containsElement("//div[contains(@class, 'author__name')]")            //Check that article has author
        .saveScreenshot(`${config.imgpath(browser)}first-article.png`)
        .end()
    },
};