var contactPage = require("./pages/contact");

describe("Protractor Workshop app", function () {
  beforeEach(function () {
    contactPage.get();
  });

  it('hould have Contact page with title "Protractor workshop | Contact us"', function () {
    expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
  });

  it('should display text "Your message has been sent." when user sends message  ', function () {
    const success = "Your message has been sent.";
    contactPage.fillForm("name name", "name.noname@gmail.com", "content content");
    contactPage.submitButton();
    expect(contactPage.checkSucces(success)).toEqual(success);
  });
});
