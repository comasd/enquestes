// spec veure i crear enquestes
describe('Comprovar acces a les enquestes ', function() {
    var message = element(by.id('benvingudaMessage'));
    var botoVeureEnquestes = element(by.id('botoLoginVeureEnquestes'));
    var usuariNom = element(by.model('login.loginData.username'));
    var usuariPassword = element(by.model('login.loginData.password'));
    var botoConfirmaLogin = element(by.id('botoConfirmaLogin'));

    it('should be able to login as UOC user and see polls', function() {
        browser.get('http://localhost:8000');
        botoVeureEnquestes.click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/polls');
      });

});