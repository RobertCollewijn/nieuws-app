import { NieuwsAppPage } from './app.po';

describe('nieuws-app App', function() {
  let page: NieuwsAppPage;

  beforeEach(() => {
    page = new NieuwsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
