var contactPage = require('./pages/contact');
describe('Protractor Workshop app', function() {
	
	beforeEach(function () {
		contactPage.get();
	});

	it('hould have Contact page with title "Protractor workshop | Contact us"', function(){
		expect(contactPage.getTitle()).toEqual('Protractor workshop | Contact us');	
	});

	it('should display text "Your message has been sent." when user sends message  ', function(){
	
		var CONTAIIN = 'Your message has been sent.';
		var NAME = 'imie';
		var EMAIL = 'testmail3@test.com';
		var CONTENT = 'something';

		contactPage.sendMessage(NAME, EMAIL, CONTENT);

		expect(contactPage.getFinalContent()).toContain(CONTAIIN);
		
	});

});
