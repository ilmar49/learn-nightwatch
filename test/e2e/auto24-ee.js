const config = require("../../nightwatch.conf.js");

module.exports = {
    "Testing auto24.ee": function (browser) {
      browser
        .url("https://www.auto24.ee/main/mainindex.php")
        .waitForElementVisible("body", 2000)
        .resizeWindow(1280,1024)
        .useXpath()
        .click('//a[@href="/kasutatud/kasutatud.php"]')
        .waitForElementVisible("//body", 2000)
        .click('//a[@href="/kasutatud/nimekiri.php?a=101&j=3"]')
        .waitForElementVisible("//body", 2000)
        .useCss()
        .setValue('input[id="searchParam-year"]', '2010')
        .setValue('select[id="searchParam-fuel"]', 'bensiin')
        .setValue('select[id="searchParam-transmission"]', 'automaat')
        .moveToElement('#searchParam-show_pictures', 0, 0)
        .pause(4000);

        browser.elements(
          "css selector",
          "#searchParam-show_pictures:not(:checked)",
          (result) => {
            if (result.value.length === 1) {
              browser.click("#searchParam-show_pictures:not(:checked)");
            }
          },
        );

          browser.click("input[name=otsi]")
          .pause(5000)
          .end()
    },
  };