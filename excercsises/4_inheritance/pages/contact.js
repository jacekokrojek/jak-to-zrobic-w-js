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
  fillFormSubmit(name, email, content) {
    element(by.id("name")).clear().sendKeys(name);
    element(by.id("email")).clear().sendKeys(email);
    element(by.id("content")).clear().sendKeys(content);
    element(by.css(".test")).click();
  };
  findSuccessInformation(){
    const success = "Your message has been sent.";
    let getSuccess = element(by.css(".alert-success"));
    let ec = protractor.ExpectedConditions;
    browser.wait(ec.textToBePresentInElement(getSuccess, success),
      6000
    );
    return getSuccess.getText();
  }
}
module.exports = Contact;

module.exports = new Contact();