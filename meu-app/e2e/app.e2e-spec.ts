import { MeuAppPage } from './app.po';

describe('meu-app App', () => {
  let page: MeuAppPage;

  beforeEach(() => {
    page = new MeuAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
