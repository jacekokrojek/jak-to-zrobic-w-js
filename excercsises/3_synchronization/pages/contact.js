var Contact = function () {
  this.get = function () {
    browser.driver.get(
      "http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html"
    );
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };
  this.fillForm = (name, email, content) => {
    let nameValue = element(by.id("name")).clear();
    let emailValue = element(by.id("email"));
    let contentValue = element(by.id("content"));
    nameValue.clear();
    nameValue.sendKeys(name);
    emailValue.clear();
    emailValue.sendKeys(email);
    contentValue.clear();
    contentValue.sendKeys(content);
  };
  this.submitButton = () => {
    let button = element(by.css(".test"));
    button.click();
  };
  this.checkSucces = (success) => {
    let expectSuccess = element(by.css(".alert-success"));
    let epectCondition = protractor.ExpectedConditions;
    browser.wait(
      epectCondition.textToBePresentInElement(expectSuccess, success),
      6000
    );
    return expectSuccess.getText();
  };
};

module.exports = new Contact();
