// spec veure i crear enquestes
describe('Comprovar acces a les enquestes ', function() {
    var message = element(by.id('benvingudaMessage'));
    var botoVeureEnquestes = element(by.id('botoLoginVeureEnquestes'));
    var usuariNom = element(by.model('login.loginData.username'));
    var usuariPassword = element(by.model('login.loginData.password'));
    var botoConfirmaLogin = element(by.id('botoConfirmaLogin'));
    var botoLogin = element(by.id('botoLogin'));
    var botoCrearEnquesta = element(by.id('botoCrearEnquesta'));
    var introPregunta = element(by.id('pollQuestion'));
    var botoConfirmaEnquesta = element(by.id('botoConfirmaEnquesta'));
    var votarOpcio = element(by.id('botoSeleccioVot'));
    var votFet = element(by.id('votComptabilitzat'));

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

    it('should be able to create a poll', function() {
        botoCrearEnquesta.click();
        introPregunta.sendKeys('Color favorit?');
        element.all(by.repeater('choice in poll.choices')).get(0).element(by.model("choice.text")).sendKeys('Blau');
        element.all(by.repeater('choice in poll.choices')).get(1).element(by.model("choice.text")).sendKeys('Negre');
        element.all(by.repeater('choice in poll.choices')).get(2).element(by.model("choice.text")).sendKeys('Blanc');
        browser.manage().timeouts().implicitlyWait(250);
        botoConfirmaEnquesta.click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/polls');
        expect(element(by.linkText('Color favorit?')).isPresent()).toBe(true);

      });

    it('should be able to vote an existing poll', function() {
        element(by.linkText('Color favorit?')).click();
        element.all(by.repeater('choice in poll.choices')).get(0).element(by.model("poll.userVote")).click();
        votarOpcio.click();
        expect(votFet.getText()).toEqual("Has votat l'opció Blau.");

    });

});