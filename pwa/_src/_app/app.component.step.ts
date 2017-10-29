
//import { browser } from 'protractor';
import { AppComponentPage } from '../_common/page-objects/app.component.po';
import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({Given, When, Then}) {

    let page: AppComponentPage = new AppComponentPage();

    Given(/^I am on google page$/, () => {
       page.navigateTo()
       console.log("Given");
       return expect(page.getHeaderText()).to.eventually.equal('Base Angular Application');
    });

    When(/^I type typescript$/, () => {
        page.navigateTo()
        console.log("When");
        return expect(page.getHeaderText()).to.eventually.equal('Base Angular Application');
    });
    
    When(/^I type cucumber$/, () => {
        page.navigateTo()
        console.log("When");
        return expect(page.getHeaderText()).to.eventually.equal('Base Angular Application');
    });

    Then(/^I click on search button$/, () => {
        page.navigateTo()
        console.log("Then");
        return expect(page.getHeaderText()).to.eventually.equal('Base Angular Application');
    });

    Then(/^I clear the search text$/, () => {
        page.navigateTo()
        console.log("Then");
        return expect(page.getHeaderText()).to.eventually.equal('Base Angular Application');
    });



});




