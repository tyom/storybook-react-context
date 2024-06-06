import { Selector, t } from 'testcafe';

class Page {
  constructor() {
    this.panelTabs = Selector(
      '#storybook-panel-root > div:nth-child(1) [role="tablist"]',
    );
    this.controlsPanel = Selector('.docblock-argstable-body');
  }

  assertTextInPreview(selector, expectedText, assertionOptions) {
    return t
      .switchToIframe('#storybook-preview-iframe')
      .expect(Selector(selector).innerText)
      .eql(expectedText, assertionOptions)
      .switchToMainWindow();
  }

  clickInPreview(selector) {
    return t
      .switchToIframe('#storybook-preview-iframe')
      .click(selector)
      .switchToMainWindow();
  }

  selectSidebarItem(title) {
    const sidebarLink = Selector('#storybook-explorer-tree').find('a').withText(title);
    return t.click(sidebarLink);
  }

  selectPanel(panelName) {
    const panelTab = this.panelTabs.find('button').withText(panelName);
    return t.click(panelTab);
  }
}

export default new Page();
