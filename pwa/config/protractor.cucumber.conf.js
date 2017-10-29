
/*
    protractor config api 
    https://github.com/angular/protractor/blob/master/lib/config.ts

 */
require('ts-node/register');
var helpers = require('./helpers');


module.exports = {

  config:{

    baseUrl: 'http://localhost:7010/',

    directConnect: true,

    specs: [
        '_src/**/**.feature',
        '_src/**/*.feature',
    ],

    exclude: [],
    
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts:{
      require: [
        '_src/**/**.step.ts',
        '_src/**/*.step.ts',
      ],
      compiler: 'ts:ts-node/register',
      strict: true,
      format: ['pretty'],
      tags: '@TypeScriptScenario or @CucumberScenario'
    },

    allScriptsTimeout: 110000,

    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': [ 'disable-infobars']
      }
    },    

    onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    },

    useAllAngular2AppRoots: true
  }


 
};
