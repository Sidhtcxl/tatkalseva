import { TatkalsevaPage } from './app.po';

describe('tatkalseva App', function() {
  let page: TatkalsevaPage;

  beforeEach(() => {
    page = new TatkalsevaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
