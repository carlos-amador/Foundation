
/*
    protractor config api 
    https://github.com/angular/protractor/blob/master/lib/config.ts

 */
require('ts-node/register');
var helpers = require('./helpers');
var webpackConfig = require('./webpack.test');
var SpecReporter = require('jasmine-spec-reporter');
var grepPattern = "overview header";


module.exports = {

  config:{

    baseUrl: 'http://localhost:7010/',

    specs: [
      helpers.root('_src/**/**.e2e.ts'),
      helpers.root('_src/**/*.e2e.ts')
    ],

    exclude: [],
    
    framework: 'jasmine',

    allScriptsTimeout: 110000,

    jasmineNodeOpts: {
      showTiming: true,
      showColors: true,
      defaultTimeoutInterval: 400000
    },

    directConnect: true,
    
    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': ['disable-inforbars']
      }
    },    

    onPrepare: function() {
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(SpecReporter);
    },


  }


 
};
