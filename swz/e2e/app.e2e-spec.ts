import { SwzPage } from './app.po';

describe('swz App', () => {
  let page: SwzPage;

  beforeEach(() => {
    page = new SwzPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
