import { CrossPlayPage } from './app.po';

describe('cross-play App', () => {
  let page: CrossPlayPage;

  beforeEach(() => {
    page = new CrossPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
