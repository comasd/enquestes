// spec.js
describe('Comprovar enregistrament usuaris a la web', function() {
    var message = element(by.id('benvingudaMessage'));
    var usuariNom = element(by.model('login.loginData.username'));
    var usuariPassword = element(by.model('login.loginData.password'));
    var creaUsuariNom = element(by.model('user.userData.name'));
    var creaUsuariUsername = element(by.model('user.userData.username'));
    var creaUsuariPassword = element(by.model('user.userData.password'));
    var confirmaLogin = element(by.id('confirmacioLogin'));
    var botoLogin = element(by.id('botoLogin'));
    var botoCreaUsuariTest = element(by.css('[ng-click="login.createSample()"]'));
    var botoCreate = element(by.id('botoCrearUsuari'));
    var botoConfirmaLogin = element(by.id('botoConfirmaLogin'));

    it('should be able to fill login form', function() {
        browser.get('http://localhost:8000/users/create');
        creaUsuariNom.sendKeys("test");
        creaUsuariUsername.sendKeys("test");
        creaUsuariPassword.sendKeys("test");
        botoCreate.click();
    });

    it('should be able to create UOC user', function() {
        browser.get('http://localhost:8000/login');
        usuariNom.sendKeys('UOC');
        botoCreaUsuariTest.click();
        browser.manage().timeouts().implicitlyWait(25000);
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/login');
      });

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

      it('should be able to login as UOC user', function() {
        botoLogin.click();
        usuariNom.sendKeys('UOC');
        usuariPassword.sendKeys('test');
        botoConfirmaLogin.click();
        //expect(confirmaLogin.getText()).toEqual('Users NEW USER');
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/users');
      });

});