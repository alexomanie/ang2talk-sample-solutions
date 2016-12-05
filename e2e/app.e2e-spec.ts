import { PossibleSolutionPage } from './app.po';

describe('possible-solution App', function() {
  let page: PossibleSolutionPage;

  beforeEach(() => {
    page = new PossibleSolutionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
