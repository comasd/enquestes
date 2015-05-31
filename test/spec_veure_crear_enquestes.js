// spec veure i crear enquestes
describe('Comprovar acces a les enquestes ', function() {
    var message = element(by.id('benvingudaMessage'));
    var botoLogin = element(by.id('botoLogin'));
    var usuariNom = element(by.model('login.loginData.username'));
    var usuariPassword = element(by.model('login.loginData.password'));
    var botoConfirmaLogin = element(by.id('botoConfirmaLogin'));

    it('should be able to login as UOC user and see polls', function() {
        browser.get('http://localhost:8000');
        botoLogin.click();
        usuariNom.sendKeys('UOC');
        usuariPassword.sendKeys('test');
        botoConfirmaLogin.click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/polls');
      });

});