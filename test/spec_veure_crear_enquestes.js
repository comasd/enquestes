// spec veure i crear enquestes
describe('Comprovar acces a les enquestes ', function() {
    var message = element(by.id('benvingudaMessage'));
    var botoVeureEnquestes = element(by.id('botoLoginVeureEnquestes'));
    var usuariNom = element(by.model('login.loginData.username'));
    var usuariPassword = element(by.model('login.loginData.password'));
    var botoConfirmaLogin = element(by.id('botoConfirmaLogin'));
    var botoLogin = element(by.id('botoLogin'));

    it('should be able to login as UOC user and see polls', function() {
        browser.get('http://localhost:8000');
        botoLogin.isPresent().then(function(result){
            if (result) {
                botoLogin.click();
                usuariNom.sendKeys('UOC');
                usuariPassword.sendKeys('test');
                botoConfirmaLogin.click();
            } else {
                botoVeureEnquestes.click();
            }
        });
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/polls');
      });

});