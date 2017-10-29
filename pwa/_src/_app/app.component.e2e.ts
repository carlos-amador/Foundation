import { AppComponentPage } from '../_common/page-objects/app.component.po';



var e2etest = describe('Outside In App', function() {
  let page: AppComponentPage;

  beforeAll(() => {
    page = new AppComponentPage();
  });

  it('should display header message saying Base Angular Application', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual("Base Angular Application");
  });

  it('should click the overview button and show an overview description', () => {
    page.navigateTo();
    page.clickLink("Overview");
    expect(page.getParagraphText()).toEqual("Overview");
  });



})

module.exports = e2etest;