var Contact = function () {
  this.get = function () {
    browser.driver.get(
      "http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html"
    );
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };
  this.fillFormSubmitCheckSuccess = (name, email, content,success) => {
    element(by.id("name")).clear().sendKeys(name);
    element(by.id("email")).clear().sendKeys(email);
    element(by.id("content")).clear().sendKeys(content);
    element(by.css(".test")).click();
    let getSuccess = element(by.css(".alert-success"));
    let epectCondition = protractor.ExpectedConditions;
    browser.wait(epectCondition.textToBePresentInElement(getSuccess, success),
      6000
    );
    return getSuccess.getText();
  };
};

module.exports = new Contact();