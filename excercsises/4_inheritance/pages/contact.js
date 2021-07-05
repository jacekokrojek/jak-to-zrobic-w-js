let Page = require("./page");
class Contact extends Page {
  load() {
    super.load("/contact.html");
  }
  get() {
    browser.driver.get("contact.html");
  }

  getTitle() {
    return browser.driver.getTitle();
  }
  nameInput(name) {
    element(by.id("name")).clear().sendKeys(name);
  }
  emailInput(email) {
    element(by.id("email")).clear().sendKeys(email);
  }
  contentInput(content) {
    element(by.id("content")).clear().sendKeys(content);
  }
  submitButton() {
    element(by.css(".test")).click();
  }
  checkSucces(success) {
    let expectSuccess = element(by.css(".alert-success"));
    let epectCondition = protractor.ExpectedConditions;
    browser.wait(
      epectCondition.textToBePresentInElement(expectSuccess, success),
      6000
    );
    return expectSuccess.getText();
  }
}
module.exports = Contact;

module.exports = new Contact();
