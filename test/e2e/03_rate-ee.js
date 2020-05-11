const config = require("../../nightwatch.conf.js");

module.exports = {
    "Test for rate": function (browser) {
      browser
        .url("https://rate.ee/login/")
        .waitForElementVisible("body", 2000)
        .useXpath()
        .click("//a[@href='https://rate.ee/mailbox']")
        .waitForElementVisible("//body", 2000)
        .assert.containsText("//body", 'Seda lehte näevad ainult registreeritud kasutajad.')
        .useCss()
        .end();
    },


  /*  ainult css

module.exports = {
  "Postkast login test": function (browser) {
    browser
      .url('https://rate.ee/login')
      .waitForElementVisible("body", 2000) // css
      .click('a.icn-messages') // css
      .waitForElementVisible("body", 2000) // css
      .assert.containsText("body", "Seda lehte näevad ainult registreeritud kasutajad.") // css
      .saveScreenshot(`${config.imgpath(browser)}rate-ee-postkast.png`)
      .end();
  },
*/

};
/*
browser
      .url("https://rate.ee/register")
      .waitForElementVisible("body")
      .resizeWindow(1200, 800)
      .useXpath()
      .click("//a[@id='fake-city']")
      .useCss()
      .waitForElementVisible('#modal-city-name')
      .setValue('#modal-city-name', 'tallinn')
      .useXpath()
      .waitForElementVisible('//button[text()="Tallinn (Harju maakond)"]')
      .click('//button[text()="Tallinn (Harju maakond)"]')
      .pause(2000);

      */
