const config = require("../../nightwatch.conf.js");

module.exports = {
    "Test nightwatchjs.org": function (browser) {
      browser
        .url("https://nightwatchjs.org/")
        .waitForElementVisible("body", 2000)
        .click('a.')
       /* .useXpath()
        .click('//a[text()="API Reference"]')

        
        .waitForElementVisible("body", 2000)
        .click('a[href="https://nightwatchjs.org/api/expect/"]')
        .waitForElementVisible("body", 2000)
        .click('a[href="https://nightwatchjs.org/api/expect/#expect-elements-count"]')
 
 
 
        .waitForElementVisible("body", 2000)
        .assert.containsText('id="expect-elements-count"', '.elements().count')     //ei ole kindel, kas käib nii
        .saveScreenshot(`${config.imgpath(browser)}nightwatch.png`)
*/
        .useCss()
        .end()
    },
};