import { JasmineKarmaTestPage } from './app.po';

describe('jasmine-karma-test App', () => {
  let page: JasmineKarmaTestPage;

  beforeEach(() => {
    page = new JasmineKarmaTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
