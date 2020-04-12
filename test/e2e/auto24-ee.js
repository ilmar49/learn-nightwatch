const config = require("../../nightwatch.conf.js");

module.exports = {
    "Testing auto24.ee": function (browser) {
      browser
        .url("https://www.auto24.ee/main/mainindex.php")
        .waitForElementVisible("body", 2000)
        .click("a[href='https://www.auto24.ee/kasutatud/kasutatud.php']")
        .waitForElementVisible("body", 2000)
        .click("a[href='https://www.auto24.ee/kasutatud/nimekiri.php?a=101&j=3']")
        .waitForElementVisible("body", 2000)
        .setValue('input[id="searchParam-year"]', '2010')
        .click('input[id="searchParam-fuel"]')
        .click('input[id="searchParam-fuel"]', 'bensiin')
        .click('input[id="searchParam-transmission"]')
        .click('input[id="item-searchParam-transmission"]', 'automaat')
        .verify.attributeEquals('id="searchParam-show_pictures"', 'checked', 'true')
        .click("button[type=submit]")
        .end();
    },
  };