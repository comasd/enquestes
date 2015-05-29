// spec.js
describe('Comprovar titol Enquestes UOC', function() {
    var message = element(by.css('.form-group'));

    beforeEach(function() {
        browser.get('http://comas.me:8080');
    });

      it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Hola UOC!');
      });

      it('should show a welcome message', function(){
        expect(message.getText()).toEqual('Benvinguts a la pagina enquestes UOC');
      });
});