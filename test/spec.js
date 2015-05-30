// spec.js
describe('Comprovar enregistrament usuaris a la web', function() {
    var message = element(by.id('benvingudaMessage'));
    var usuariNom = element(by.model('login.loginData.username'));
    var usuariPassword = element(by.model('login.loginData.password'));
    var confirmacioLogin = element(by.id('confirmacioLogin'));
    var botoLogin = element(by.id('botoLogin'));
    var botoConfirmaLogin = element(by.id('botoConfirmaLogin'));

    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

      it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Hola UOC!');
      });

      it('should show a welcome message', function(){
        expect(message.getText()).toEqual("Benvinguts a la pàgina d'enquestes de la UOC!");
      });

      it('should have a login button', function() {
        expect(botoLogin.isPresent()).toBe(true);
      });

      it('should have a login form', function() {
        botoLogin.click();
        expect(usuariNom.isPresent()).toBe(true);
        expect(usuariPassword.isPresent()).toBe(true);
        expect(botoConfirmaLogin.isPresent()).toBe(true);
      });

      it('should be able to login as a user', function() {
        botoLogin.click();
        usuariNom.sendKeys("test");
        usuariPassword.sendKeys("test");
        botoConfirmaLogin.click();
        expect(confirmacioLogin.getText()).toEqual('Users NEW USER');
      });

});