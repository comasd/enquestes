// conf.js
exports.config = {
  //directConnect: true,
  framework: 'jasmine2',
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        filePrefix: 'xmloutput',
        savePath: 'testresults'
    }));
    },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js']
  /*capabilities: {
    browserName: 'firefox'
  }*/
}
/*require('jasmine-reporters');
        jasmine.getEnv().addReporter(
            new jasmine.JUnitXmlReporter('e2e-reports/junit-report', true, true));*/