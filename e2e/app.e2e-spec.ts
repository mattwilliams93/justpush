import { JustPushPage } from './app.po';

describe('just-push App', function() {
  let page: JustPushPage;

  beforeEach(() => {
    page = new JustPushPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
